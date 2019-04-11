'use strict'

const Torneo = require("../modelos/torneo")

function obtenerTorneos(req, res)
{
    Torneo.find({}).exec((err, listadoTorneos) => {
        if(err)
        {
            res.status(500).send(
                {
                    message: "Error al recuperar los torneos"
                }
            )
        }
        else
        {
            if(listadoTorneos)
            {
                res.status(200).send({listadoTorneos})
            }
            else
            {
                res.status(404).send(
                    {
                        message: "No se ha podido recuperar el listado de torneos jugados"
                    }
                )
            }
        }
    })
}

function obtenerTorneo(req, res)
{
    Torneo.find({'_id': req.params.idTorneo}).exec((err, torneo) => {
        if(err)
        {
            res.status(500).send(
                {
                    message: "Error al recuperar el torneo"
                }
            )
        }
        else
        {
            if(Torneo)
            {
                res.status(200).send({torneo})
            }
            else
            {
                res.status(404).send(
                    {
                        message: "No se ha podido recuperar el torneo"
                    }
                )
            }
        }
    })
}

function anadirTorneo(req, res) 
{
    let torneo = new Torneo()
    let params = req.body

    if(params.nombreTorneo)
    {
        torneo.nombreTorneo = params.nombreTorneo

        torneo.save((err, torneoGuardado) => {
            if (err) 
            {
                res.status(500).send(
                    {
                        message: "Error al guardar el torneo"
                    }
                )
            }
            else
            {
                if(torneoGuardado)
                {
                    res.status(200).send(
                        {
                            torneo: torneoGuardado
                        }
                    )
                }
                else
                {
                    res.status(404).send(
                        {
                            message: "Error al añadir el torneo"
                        }
                    )
                }
                
            }
        })
    }
    else
    {
        res.status(200).send(
            {
                message: "Añade los campos necesarios (el nombre del torneo) para que se pueda guardar al menos"
            }
        )
    }
}


module.exports = 
{ 
    obtenerTorneo,
    obtenerTorneos,
    anadirTorneo
}