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
        let misRondasTorneo = params.rondasTorneo

        torneo.nombreTorneo = params.nombreTorneo
        torneo.participantesTorneo = params.participantesTorneo
        torneo.localizacionTorneo = params.localizacionTorneo
        torneo.rondasTorneo = []

        let rondasTorneo = new Object()
        
        rondasTorneo.numero = misRondasTorneo[0].numero
        rondasTorneo.nombreRonda = misRondasTorneo[0].nombreRonda
        rondasTorneo.rivalPartido = misRondasTorneo[0].rivalPartido
        rondasTorneo.fechaPartido = misRondasTorneo[0].fechaPartido

        rondasTorneo.resultado = new Array()
        /*resultado = misRondasTorneo[0].resultado*/
        rondasTorneo.resultado[0] = misRondasTorneo[0].resultado[0] + misRondasTorneo[0].resultado[1] + misRondasTorneo[0].resultado[2]
        rondasTorneo.resultado[1] = misRondasTorneo[0].resultado[4] + misRondasTorneo[0].resultado[5] + misRondasTorneo[0].resultado[6]
        if(misRondasTorneo[0].resultado[8] != null)
        {
            rondasTorneo.resultado[2] = misRondasTorneo[0].resultado[8] + misRondasTorneo[0].resultado[9] + misRondasTorneo[0].resultado[10]
        }
        
        torneo.rondasTorneo = rondasTorneo

        console.log('----------------------------------')
        console.log('Torneo completo -> ' + JSON.stringify(torneo))
        console.log('----------------------------------')
        /*console.log('RondasTorneo ->' + torneo.rondasTorneo)
        console.log('----------------------------------')*/
        console.log('Mis rondas torneo -> ', misRondasTorneo)
        console.log('----------------------------------')
        console.log('Mis rondas torneo resultados -> ', misRondasTorneo[0].resultado[0])
        console.log('----------------------------------')
        console.log('Individuales -> Número: ' + torneo.rondasTorneo[0].numero + ' Nombre Ronda: ' + torneo.rondasTorneo[0].nombreRonda + ' Resultado: ' + rondasTorneo.resultado[0])

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
        res.status(204).send(
            {
                message: "Añade los campos necesarios (el nombre del torneo) para que se pueda guardar al menos"
            }
        )
    }
}


function anadirPartido(req, res) 
{
    let torneo = new Torneo()
    let params = req.body

    if(params.nombreTorneo)
    {
        let misRondasTorneo = params.rondasTorneo

        let rondasTorneo = new Object()
        
        rondasTorneo.numero = misRondasTorneo[0].numero
        rondasTorneo.nombreRonda = misRondasTorneo[0].nombreRonda
        rondasTorneo.rivalPartido = misRondasTorneo[0].rivalPartido
        rondasTorneo.fechaPartido = misRondasTorneo[0].fechaPartido

        rondasTorneo.resultado = new Array()
        /*resultado = misRondasTorneo[0].resultado*/
        rondasTorneo.resultado[0] = misRondasTorneo[0].resultado[0] + misRondasTorneo[0].resultado[1] + misRondasTorneo[0].resultado[2]
        rondasTorneo.resultado[1] = misRondasTorneo[0].resultado[4] + misRondasTorneo[0].resultado[5] + misRondasTorneo[0].resultado[6]
        if(misRondasTorneo[0].resultado[8] != null)
        {
            rondasTorneo.resultado[2] = misRondasTorneo[0].resultado[8] + misRondasTorneo[0].resultado[9] + misRondasTorneo[0].resultado[10]
        }
        
        
        torneo.rondasTorneo = rondasTorneo

        console.log('----------------------------------')
        console.log('Torneo completo -> ' + JSON.stringify(torneo))
        console.log('----------------------------------')
        /*console.log('RondasTorneo ->' + torneo.rondasTorneo)
        console.log('----------------------------------')*/
        console.log('Mis rondas torneo -> ', misRondasTorneo)
        console.log('----------------------------------')
        console.log('Mis rondas torneo resultados -> ', misRondasTorneo[0].resultado[0])
        console.log('----------------------------------')
        console.log('Individuales -> Número: ' + torneo.rondasTorneo[0].numero + ' Nombre Ronda: ' + torneo.rondasTorneo[0].nombreRonda + ' Resultado: ' + rondasTorneo.resultado[0])

        var ronda = rondasTorneo/*{"numero": rondasTorneo.numero, "nombreRonda": rondasTorneo.nombreRonda, 
                     "rivalPartido": rondasTorneo.rivalPartido, "fechaPartido": rondasTorneo.fechaPartido,
                     "resultado": rondasTorneo.resultado}*/

        Torneo.findOneAndUpdate({"nombreTorneo": params.nombreTorneo}, {$push: {"rondasTorneo": ronda}},
                                (err, torneoActualizado) => {
                                    if(err)
                                    {
                                        res.status(500).send({message:"Error al modificar el torneo"})
                                    }
                                    else
                                    {
                                        if(torneoActualizado)
                                        {
                                            res.status(200).send({torneo: torneoActualizado})
                                        }
                                        else
                                        {
                                            res.status(404).send({message: "El torneo no ha podido ser actualizado, no existe"})
                                        }
                                    }
                                })
        
        
    }
}




module.exports = 
{ 
    obtenerTorneo,
    obtenerTorneos,
    anadirTorneo,
    anadirPartido
}