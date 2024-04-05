const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const indexRoutes = require('./routes/indexRoutes');

//setup de ejs
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

//setup public dir
app.use(express.static('public'));

//URL encode  para la verga esta de que me agarre el req.body trolo
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//Para poder usar put y delete, porque a nadie se le ocurrió integrarlo
app.use(methodOverride('_method'));

//Entry point a las rutas
app.use('/', indexRoutes);



//correr server

app.listen('3000', ()=> console.log('Servidor corriendo en http://localhost:3000/'))