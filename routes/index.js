const express = require('express')
const router = express.Router()
const indexRouter = require('./indexRouter')


router.use('/', indexRouter)

module.exports = router