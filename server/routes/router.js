const expess=require("express");
const { userRegister, userLogin } = require("../controller/authController");
const router=expess.Router();

router.post("/register",userRegister);
router.post("/login",userLogin);
router.post("/otp");

module.exports=router;