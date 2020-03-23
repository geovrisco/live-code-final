const {User}= require('../models/index')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class UserController{

  static login(request, response, next){

    User.findOne({where:{username:request.body.username}})
    .then(data=>{
      if(!data){
        let error={
          code:404,
          errors:['username not found'],
          message:'error log in'
        }
        throw (error)
        //kalo ga ada
      }else{
        if(data.password===request.body.password){
          //kalo sama
          let token = jwt.sign({
            id:data.id,
            username:data.username
          }, process.env.SECRET)
          response.json({token:token, id:data.id, username:data.username})
        }else{
          //throw error
          let error = {
            code: 401,
            errors:['invalid username/passwords'],
            message:'error log in'
          }
          throw (error)
        }
      }
    })
    .catch(err=>{
      // console.log(err)
      next(err)

    })
  }

}

module.exports = UserController