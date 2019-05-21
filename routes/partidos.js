'use strict'

const express = require('express')
const controladorPartidos = require('../controllers/partidos')

let api = express.Router()

// api.get para los GET, api.post para los POST

api.get('/torneos', controladorPartidos.obtenerTorneos)
api.get('/torneo/:idTorneo', controladorPartidos.obtenerTorneo)
api.post('/torneo', controladorPartidos.anadirTorneo)
api.post('/partido', controladorPartidos.anadirPartido)

module.exports = api