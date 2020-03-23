const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const port = 3000
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const errorhandler= require('./helper/errhandler')

const router = require('./router/index')
app.use('/',router)
app.use(errorhandler)

app.listen( port, ()=>{
  console.log('runningon port ',port)
})