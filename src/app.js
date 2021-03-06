// babel convierte el codigo de js moderno a codigo soportado por node
const express = require('express')
//importamos el middlawere de morgan
const morgan = require('morgan')
//Importamos el pakage json
const pkg = require('../package.json')

//Importamos las rutas de los Usuarios}
const AuthRoute = require('./routes/auth.routes')

//importamos las rutas de los usuarios
const UserRoute = require('./routes/user.routes')

//importamos las rutas de las noticias 

const NewsRoutes = require('./routes/news.routes')
//Importamos el creador de roles 
const createRoles = require('./libs/roles.libs');
//Iniciamos express
const app = express();
createRoles();

//Asignamos el pkg a una variable
app.set('pkg', pkg);



//Agregar al acceso al CORS 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//usamor morgan middlawere para controlar nuestra aplicacion
app.use(morgan('dev'));

//Usamos el middlawere de express apara que entienda los datos en JSON
app.use(express.json())

//creamos que muestras  la informacion del proyecto
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        author: app.get('pkg').author,
        version: app.get('pkg').version
    });
});

//Usamos las rutas para utentificar los usuarios
app.use('/auth', AuthRoute);

//importamos las rutas de los usuarios
app.use('/user', UserRoute);

//Usamos las rutas de las noticias
app.use('/news', NewsRoutes);

//Aprender Express Validations
module.exports = app;