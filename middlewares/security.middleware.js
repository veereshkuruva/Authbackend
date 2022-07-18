const allowAccess =(req,res,next) =>{
    const token =req.headers.token
    if(token){
           next();
    }
    else{
        res.json({

         message:"Restricted not allow"
        })
    }
}
module.exports = allowAccess