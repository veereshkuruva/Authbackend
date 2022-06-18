const allowAccess =(req,res,next) =>{
    const token =req.headers.token
    if(token){

    }
    else{
        res.json({

         message:"Restricted not allow"
        })
    }
}