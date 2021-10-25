const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors')

//Administrador
const modulo = require('./routes/administracion/modulo');
const usuario = require('./routes/administracion/usuario');
const empresa = require('./routes/administracion/empresa');
const moduloempresa = require('./routes/administracion/modulo_empresa');
const usuarioempresa = require('./routes/administracion/usuario_empresa');

//Gestión Personas
const afp = require('./routes/gestion_personas/afp');
const salud = require('./routes/gestion_personas/salud');
const tipocontrato = require('./routes/gestion_personas/tipocontrato');
const personal = require('./routes/gestion_personas/personal');

const app = express();
app.set('port', process.env.PORT || 8000);
const dboptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'dbprueba'
}

//Middlewares ****
app.use(myconn(mysql, dboptions, 'single'))
app.use(express.json());
app.use(cors());

//Administrador
app.use('/modulo', modulo);
app.use('/usuario', usuario);
app.use('/empresa', empresa);
app.use('/moduloempresa', moduloempresa);
app.use('/usuarioempresa', usuarioempresa);


//Gestion Personas

app.use('/afp', afp);
app.use('/salud', salud);
app.use('/tipocontrato', tipocontrato);
app.use('/personal', personal);


//server running ***
app.listen(app.get('port'), () =>{
    console.log('Server running on port ',app.get('port'));
})