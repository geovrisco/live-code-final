const {Country, Report} = require('../models/index')

class controller{

  static getCountry ( req,res,next){
    Country.findAll()
    .then(data=>{
      res.json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static getReport(req,res,next){
    Report.findAll()
    .then(data=>{
      console.log(data)
      res.json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static postReport(req,res,next){
    // let dataCountry=null
    console.log(req.UserData)
    Country.findOne({where:{id:req.body.CountryId}})
    .then(data=>{
      let newCases= Number(data.cases)+Number(req.body.cases)
      // console.log(newCases,'ini kasus baru')
      // console.log(data.id, '=================')

      return Country.update({cases:newCases},
        {where:{id:data.id}})
    })
    .then(result=>{
      console.log('disini')
      return Report.create({cases:req.body.cases,UserId:req.UserData.id , CountryId:req.body.CountryId})
    })
    .then(data=>{
      // console.log(data.id,'==============================')
      return Report.findAll({where:{id:data.id}})
    })
    .then(data=>{
      console.log('==============================',data.id)
      return Report.findOne(
        {
          where:{
            id:data.id
          },
          include:Country
        })
    })
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
      next(err)
    })
    
  }

}

module.exports=controller