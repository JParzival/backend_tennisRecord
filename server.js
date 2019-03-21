'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const rutas = require('./routes/partidos')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', rutas)

module.exports = app