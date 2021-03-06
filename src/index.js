"use strict";
// desde este archivo arrancamos la aplicacion
const app = require('./app.js')
const connection = require('./database.js')
const dotenv = require('dotenv')
//Configuramos las variables de entorno
dotenv.config();
//Abrimos el puerto de nustra aplicacion
//1. Asignamos el puerto a una variable
// este valor lo capturamos de una variable de entorno.
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log('Servidor abierto en el puerto', PORT);