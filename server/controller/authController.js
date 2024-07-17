const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");

const sendEmail = require("../utils/nodeMailer");

// User registration handler

exports.userRegister = async (req, res) => {
  try {
    const { name, emlorphnno, password } = req.body;
    console.log("reqbody", req.body);

    const userExist = await User.findOne({ emlorphnno });
    // console.log(userExist);
    if (userExist) {
      console.log("User already Exist");
      res.status(400).json({ error: true, message: "user already exist" });
      return;
    }

    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);

    const newUser = new User({
      username: name,
      emlorphnno: emlorphnno,
      password: hashedpassword,
    });

    newUser.save();
    console.log("new user=", newUser);
    const data = {
      username: newUser.username,
      emlorphnno: newUser.emlorphnno,
      password: newUser.hashedpassword,
    };
console.log(data);
    res.status(200).json({
      error: false,
      status: true,
      message: "user registered succcessfully",
      data: data,
    });
  } catch (error) {
    console.log("server error", error);
    res
      .status(500)
      .json({ error: true, status: false, message: "server error" });
  }
};

// User login handler

exports.userLogin = async (req, res) => {
  const { emlorphnno, password } = req.body;
  console.log("Email or Phone number=", emlorphnno);
  console.log("password=", password);
  try {
    const user = await User.findOne({ emlorphnno, active: true });
    console.log("User =", user);

    if (!user) {
      console.log("User not found");
      return res.status(400).json({ error: true, message: "Invalid User" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Invalid password");
      return res.status(400).json({ error: true, message: "Inalid password" });
    }
    sendEmail(emlorphnno);
    const token = jwt.sign({ id: user._id }, "your_jwt_secret", {
      expiresIn: "1h",
    });
    res.status(200).json({
      error: false,
      status: true,
      message: "Login successful",
      data: user,
    });
  } catch (error) {
    console.log("Server error", error);
    res
      .status(500)
      .json({ error: true, status: false, message: "Server error" });
  }
};




// otp handler
exports.forgotPassword = async (req, res) => {
  try {
    const { emlorphnno } = req.body;
    const user = await User.findOne({ emlorphnno });

    if (!user) {
      return res.status(400).json({ error: true, message: "User not found" });
    }

    // Generate a token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    const resetPasswordExpire = Date.now() + 10 * 60 * 1000; // Token expires in 10 minutes

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpire = resetPasswordExpire;
    await user.save();

    // Send the email
    const resetUrl = `http://localhost:3033/passwordreset/${resetToken}`;
    const message = `You are receiving this email because you (or someone else) has requested the reset of a password. Please make a PUT request to: \n\n ${resetUrl}`;

    try {
      await sendEmail({
        email: user.emlorphnno,
        subject: "Password Reset Token",
        message,
      });

      res.status(200).json({ success: true, data: "Email sent" });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();

      return res.status(500).json({ error: true, message: "Email could not be sent" });
    }
  } catch (error) {
    console.log("Server error", error);
    res.status(500).json({ error: true, message: "Server error" });
  }
};
// Step 2: Handle Password Reset with the Token
// javascript
// Copy code
exports.resetPassword = async (req, res) => {
  try {
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ error: true, message: "Invalid token or token expired" });
    }

    const { password } = req.body;

    if (!password || password.length < 6) {
      return res.status(400).json({ error: true, message: "Password must be at least 6 characters" });
    }

    // Hash the new password
    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({ success: true, message: "Password reset successful" });
  } catch (error) {
    console.log("Server error", error);
    res.status(500).json({ error: true, message: "Server error" });
  }
};
