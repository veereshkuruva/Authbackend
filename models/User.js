const mongoose=require('mongoose')

const Userchema =new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
},{
    timestamps:true
})
module.exports=mongoose.model("user",Userchema)