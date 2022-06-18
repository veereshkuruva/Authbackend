const express=require("express");
const app=express();
const cors=require("cors");

const authrouter=require("./routes/auth.routes");


// /auth/login
// /auth/signup
app.use(express.json());

app.use(cors());



app.use("/auth",authrouter);  // publicly available

//app.use(allowAccess)

 // only available after the logging in 


module.exports=app;