const { response } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario')

const usuariosGet = async(req, res) => {


    // const {query, nombre='no name', apikey, page, limit} = req.query;
    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number( desde ))
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        usuarios
    });
}

const usuariosPost = async (req, res = response) => {

    

    const { name, correo, password, rol} = req.body;
    const usuario =  new Usuario({ name, correo, password, rol });


   

    //Guargar en la bdd
    await usuario.save();

    res.json({
        usuario
    });
}

const usuariosPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id,password, google, correo, ...resto } = req.body;

    //TODO validar contra base de datos
    if ( password ){
        
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto );

    res.json(usuario);
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}
const usuariosDelete = async (req, res = response) => {

    const {id} = req.params;

    //Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const usuario = await Usuario.findByIdAndUpdate( id, { estado: false });

    res.json(usuario);
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}