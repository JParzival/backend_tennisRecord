'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const rutas = require('./routes/partidos')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
    next();
})

app.use(express.static("dist/TennisRecord"))
app.use('/api', rutas)

module.exports = app