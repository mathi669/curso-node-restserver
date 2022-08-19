
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos')
const { esRoleValido, elMailEsValido, existeUsuarioPorId } = require('../helpers/db-validators');

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosPatch, 
        usuariosDelete } = require('../controllers/user');



const router = Router();

  router.get('/', usuariosGet);

  router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom( esRoleValido ), 
    validarCampos
  ],usuariosPut);

  router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({ min: 6 }),
    check('correo').custom(elMailEsValido),
    //check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( esRoleValido ),
    validarCampos
  ],usuariosPost);

  router.delete('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
  ], usuariosDelete);

  router.patch('/', usuariosPatch);

module.exports = router;