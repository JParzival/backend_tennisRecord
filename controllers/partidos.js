'use strict'

function obtenerPartidos(req, res)
{
    res.status(200).send(
        {
            mensaje:'Devolviendo lista de partidos'
        }
    )
}

function anadirPartido(req, res)
{
    res.status(200).send(
        {
            mensaje:`Añadiendo partido`
        }
    )
}

function anadirTorneo(req, res)
{
    res.status(200).send(
        {
            mensaje:"Añadiendo torneo"
        }
    )
}

module.exports =
{
    obtenerPartidos,
    anadirPartido,
    anadirTorneo
}