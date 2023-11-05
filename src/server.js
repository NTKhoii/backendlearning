require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()//app express
const port = process.env.PORT || 8888 //port
const hostname = process.env.HOST_NAME
const configViewengine = require('./config/viewengine')
const Webroutes = require('./routes/web')
// console.log(">>> check env:", process.env)
// console.log('process.env.PORT')

//config template engine
configViewengine(app);

//config static file


//khai báo route
app.use('/', Webroutes)
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
