const { response } = require('express');

const usuariosGet = (req, res) => {

    const {query, nombre='no name', apikey, page, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        query,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res) => {

    const { nombre, edad, id, email} = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        edad,
        id,
        email
    });
}

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.status(500).json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch API - controlador'
    });
}
const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}