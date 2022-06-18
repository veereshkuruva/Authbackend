const express = require('express')
const app = require('./app')
require('dotenv').config()
const port = process.env.PORT || 5000

const authroute = require("./routes/auth.routes")

const dbConnect = require('./db')
app.use("/auth", authroute)


// console.log(process.env.MONGO_URL);
dbConnect(process.env.MONGO).then(data => {
    app.listen(port, () => {
        console.log(`Db connected, server is running http://localhost:${port}`)
    })
    
  

}).catch(error => {
    console.log("Error is connected,")
})


