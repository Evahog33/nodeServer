
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const baseRouter = require('./api/base')

const app = express()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/base',baseRouter)

app.use(express.static( __dirname + '/public'))

var port = 80

var env = process.env.NODE_ENV || ''

if (env === 'development') {
    port = 9090
  }

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})