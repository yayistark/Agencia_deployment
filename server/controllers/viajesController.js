const Viaje = require('../models/Viajes')

exports.mostrarViajes = async (req,res)=>{
    const viajes = await Viaje.findAll()
        res.render('viajes',{
            pagina:'Proximo Viaje',
            viajes
        })   
}

exports.mostrarViaje = async (req,res)=>{
    const viajes = await Viaje.findByPk(req.params.id)
        res.render('viaje',{
        viaje
        })     
}