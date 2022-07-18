const User = require("../models/User");
const { passwordCompare, jwtGen } = require("../utlis/utlis");
const bcrypt = require('bcrypt')

const signUp =async (req, res) => {
    
    var encryptPasa =await bcrypt.hash(req.body.password, 10) 


    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: encryptPasa

    })
    console.log(user)

   await user.save().then(data => {
        res.json({
            message: "Successfully registered"
        })
    }).catch(err => {

        res.json({
            message:"not registerd"
        })

    })

}


const login =async (req, res) => {

     await User.findOne({ email: req.body.email }).then(result => {
        //  console.log("db password",result.password.toString())
        // console.log("user password",req.body.password.toString()==result.password.toString())

        // We have to compare the passwords too
        console.log(result.password, req.body.password)
        passwordCompare(req.body.password,result.password).then(data => {
            console.log(data)
            if (data) {
                jwtGen({ username:result.email }).then(token => {

                    res.json({
                        message: "Login success",
                        token: token
                    })

                })


            }
            else {

                res.json({
                    message: "Login Failed,Passwords donot match"
                })
            }
        })


    }).catch(err => {
        res.json({
            message: "No user Found !!"
        })
    })



}



module.exports = {
    signUp,
    login

}