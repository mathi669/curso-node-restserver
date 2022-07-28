const express = require('express');
const cors = require('cors');
const { dbCOnnection } = require('../db/config');

class server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();
        //Rutas de mi app
        this.routes();
    };

    async conectarDB(){
        await dbCOnnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'))
    };

    routes(){
       
        this.app.use(this.usuariosPath, require('../routes/user'))
    };

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    };
}

module.exports=server;