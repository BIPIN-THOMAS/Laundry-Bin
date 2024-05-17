const User=require("../models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const sendEmail = require("../utils/nodeMailer");

// User registration handler

exports.userRegister=async(req,res)=>{
    console.log("Register router");
    console.log("req  body",req.body);
    try{
        const {username,emlorphnno,pswd}=req.body;
    const userExit=await User.findOne({emlorphnno});
    console.log({userExit});
    if(userExit){
        console.log("User already Exist");
        res.status(400).json({error:true,message:"user already exist"});
        return;
    }
    const hashedpassword=await bcrypt.hash(pswd,10);
    const newUser=new User({
        username,
        emlorphnno,
        pswd:hashedpassword,
    });
    newUser.save();
    console.log("new user=",newUser);
    const data={
        username:newUser.username,
        emlorphnno:newUser.emlorphnno,
    };

    res.status(200).json({error:false,status:true,message:"user registered succcessfully",data});
    }catch(error){
        console.log("server error",error);
        res
        .status(500)
        .json({error:true,status:false,message:"server error"});
    }
};

// User login handler

exports.userLogin=async(req,res)=>{
    const{emlorphnno,pswd}=req.body;
    console.log("Email or Phone number=",emlorphnno);
    console.log("password=",pswd);
    try {
        const user = await User.findOne({ emlorphnno, active: true });
        console.log("User =", user);

        if (!user) {
            console.log("User not found");
            return res.status(400).json({ error: true, message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(pswd, user.pswd);
        if (!isPasswordValid) {
            console.log("Invalid password");
            return res.status(400).json({ error: true, message: "Invalid credentials" });
        }
        sendEmail(emlorphnno)
        // const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ error: false, status: true, message: "Login successful",data:user });
    } catch (error) {
        console.log("Server error", error);
        res.status(500).json({ error: true, status: false, message: "Server error" });
    }
};


//



