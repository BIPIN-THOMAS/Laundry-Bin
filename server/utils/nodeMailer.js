const nodemailer = require("nodemailer");
require('dotenv').config()

const sendEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,  
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    // requireTLS:true,
    // logger:true
  });
  try{
    const info = await transporter.sendMail({ 
        from: process.env.NODEMAILER_EMAIL, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      // info.accepted.includes(email)

  }
  catch (error) {
    console.error("Error sending email:", error);
    return false;
  }

  
 
};


module.exports = sendEmail;
