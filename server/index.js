//importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser')
const configs = require('./config')





//configurar express
const app = express();

//habilitar pug
app.set('view engine', 'pug');

//aniadir las vistas
app.set('views',path.join(__dirname, './views'))

//cargar una carpeta estatica llamada  public
app.use(express.static('public'))

//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo = config.nombresitio

//muestra el anio actual y genera la ruta
app.use((req,res,next)=>{
    //crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next()
})
//ejecutamos el bodyParser
app.use(bodyParser.urlencoded({extended:true}))

//cargar las rutas
app.use('/' , routes())


app.listen(3000)