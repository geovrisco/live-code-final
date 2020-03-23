const jwt =require('jsonwebtoken')
require('dotenv').config()

function authenticate (req,res,next){
  const token = req.headers.token
  try{
    let decoded = jwt.verify(token,process.env.SECRET)
    req.UserData = decoded
    next()
  }catch(err){
    let obj = {
      code:403,
      errors:['invalid credentials'],
      message:'cannot go to desired page'
    }
    next(obj)
  }
}

module.exports = authenticate