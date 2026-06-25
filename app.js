const { error } = require('console');
const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path');
const port = 3000;
app.use(express.urlencoded({ extended: true}));

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

app.post('/guardar', (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;

    const query = 'INSERT INTO registros (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)';

    db.query(query, [nombre, email, asunto, mensaje], (err, result) => {
        if(err) {
            console.error(err);
            return res.send('Hubo un error al intentar guardar los datos.');
        }

        res.send('<h2> Informacion guardada con exito en la base de datos </h2><a href="/"> Volver al formulario</a>');
    });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
});
