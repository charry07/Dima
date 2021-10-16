const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const path = require('path');
const mongoose = require('./database');

app.use(cors());


// settings
app.set('port', process.env.PORT || 5000)

//funciones antes de rutas (Middlewares)
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/usuarios',require('./routes/usuariosRoutes'));


// archivos estaticos (static files)
app.use(express.static(path.join(__dirname, '../../public')));



//Starting the server
app.listen (app.get('port'), () => {
    console.log (`server on port ${app.get('port')}`)
})