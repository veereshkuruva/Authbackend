const getUserdata =(req,res)=>{

  res.json({
    message:"success"
  })
    //here querying the data

}
module.exports={
    getUserdata:getUserdata,
}