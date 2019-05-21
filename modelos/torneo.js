'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TorneoSchema = new Schema({

    idTorneo: String,
    nombreTorneo: String,
    participantesTorneo: String,
    localizacionTorneo: String,
    /*rondasTorneo:[{
        numero: String,
        nombreRonda: String,
        rivalPartido: String,
        fechaPartido: String,
        resultado:[{
            String
        }]
    }]*/
    rondasTorneo: Array
})

module.exports = mongoose.model('Torneo', TorneoSchema)