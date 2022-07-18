const express =require("express")
const userrouter =express.Router()
const {getUserdata} =require("../controllers/user.controller")
const { allowAccess} =require("../middlewares/security.middleware");

userrouter.get("/", getUserdata)
userrouter.use(allowAccess)
module.exports ={

    userrouter
}