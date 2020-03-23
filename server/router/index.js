const Router = require('express').Router()
const contUser = require('../controller/cont-user')
const contCountry = require('../controller/cont-country')
const authenticate = require('../midlleware/authentication')

Router.post('/login', contUser.login)
Router.get('/countries',authenticate, contCountry.getCountry)
Router.get('/reports',authenticate,contCountry.getReport)
Router.post('/reports',authenticate,contCountry.postReport)

module.exports= Router