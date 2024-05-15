const expess=require("express");
const { post_register,post_login,verify_otp,send_otp,create_password,authentication};
const router=expess.Router();

router.post("/register",post_register);

module.exports=router;