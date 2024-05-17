const mongoose=require("mongoose");
const userScheema=mongoose.Schema({
username:{
    type:String,
    required:true,
},
emlorphnno:{
    type:String,
    required:true,
},
pswd:{
    type:String,
    required:true,
},
active:{
    type:Boolean,
    default:true,
    required:true,
},

});
const user=mongoose.model("users",userScheema);
module.exports=user;

