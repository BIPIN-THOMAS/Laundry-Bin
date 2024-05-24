// const mongoose=require("mongoose");
// const Otp=require("../models/otp");

// export.saveOtpData=async(userId,otp)=>{
//     const expiresAt=new Data(Data.now()+5*60*1000);

//     const userIdExist=await Otp.findOne({userId});
//     if(userIdExist){
//         const newOtpData=await Otp.findOneAndUpdate({userId},{otp,expireAt});
//     }
//     else{
//         const newOtpData=new Otp({userId,otp});
//         newOtpData.save();
//     }
//     console.log(OTPdata saved successfully".bold.yellow);
// };

// // Function to generate OTP
// exports.generateOtp=()=>{
//     console.log("Otp generated".blue);
//     return Math.floor(1000+Math.random()*9000).toString();
// };
