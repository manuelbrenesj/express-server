

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');

//---------------SETTINGS---------------

app.set('port', process.env.PORT || 3000); //USAR PUERTO QUE ESTA CONFIGURADO EN SERVIDOR, SI NO USE EL 3000
app.set('views', path.join(__dirname, 'views')); //OBTIENE LA RUTA, LUEGO LA UNE CON EL DIRECTORIO VIEWS
app.set('view engine', 'ejs'); //MOTOR DE PLANTILLAS

//---------------MIDDLEWARES---------------

app.use((req,res,next) => { 
    console.log(`${req.url}-${req.method}`); //MUESTRA EL URL Y EL METODO(GET,POST,PUT,DELETE)
    next(); //LUEGO QUE PUEDA CONTINUAR
})
app.use(bodyParser.json()); //ENTIENDE LA INFO QUE LLEGA DEL NAVEGADOR, JSON
app.use(bodyParser.urlencoded({extended: false})); //TAMBIEN FORMULARIOS HTML, NO ENVIA COSAS COMPLICADAS

//---------------ROUTES---------------

app.use(routes); //AHORA SE DEFINEN LAS RUTAS EN INDEX Y AGREGAR MUCHAS MAS RUTAS

//---------------STATIC FILES---------------

app.use(express.static(path.join(__dirname, 'public'))) //DECIRLE DONDE ESTAN ARCHIVOS ESTATICOS

//---------------START THE SERVER---------------

app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'))
});