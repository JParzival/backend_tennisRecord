'use strict'

const express = require('express')
const controladorPartidos = require('../controllers/partidos')

let api = express.Router()

// api.get para los GET, api.post para los POST

api.get('/partidos', controladorPartidos.obtenerPartidos)
api.post('/partidos', controladorPartidos.anadirPartido)
api.post('/torneo', controladorPartidos.anadirTorneo)

module.exports = api