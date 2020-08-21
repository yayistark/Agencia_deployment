const Testimonial = require('../models/Testimoniales')

exports.mostrarTestimoniales = async (req,res)=>{
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales',{
        pagina:'Testimoniales',
        testimoniales
    })
}

exports.agregarTestimonial = async (req,res)=>{
    //validar que todos los campos esten llenos 
    let {nombre,correo,mensaje} = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'mensaje':'Agregar tu Nombre'})
    }
    if(!correo){
        errores.push({'mensaje':'Agregar tu Correo'})
    }
    if(!mensaje){
        errores.push({'mensaje':'Agregar tu Mensaje'})
    }
    
    //revisar por errores
    if(errores.length > 0){
        //muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje,
            pagina:'Testimoniales',
            testimoniales

        })
    }else{
        //almacenar en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(e => console.log(e))
    }


}