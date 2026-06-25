const { error } = require('console');
const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));


const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mini_app_db'
});

db.connect((err) => {
    if(err){
        console.error('Error al conectar a la bd', err);
        return;
    }
    console.log('Conexion a la base de datos exitosa.')
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
});
