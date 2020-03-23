function errhandler (err,req,res,next){
  console.log(err)
  if (err){
    console.log('masuk sini')
    res.status(err.code).json({errors:err.errors, message:err.message})
  }else{
    res.status(500).json({message:'internal server error'})
  }

}

module.exports = errhandler