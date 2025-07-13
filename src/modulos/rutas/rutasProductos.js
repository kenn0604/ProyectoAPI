const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('../controladores/controladorProductos');

const router = express.Router();
router.get('/', todos);
router.get('/:id', uno);
router.post('/', agregar);
router.put('/',eliminar);

async function todos (req, res, next){
     try {
        const items = await controlador.todos();
        respuesta.success(req, res, items, 200);
 
    } catch (err) {
        next(err);
    }
    
    
};

async function uno (req, res, next){
    try {
        const items = await controlador.uno(req.params.id);
        respuesta.success(req, res, items, 200);
 
    } catch (err) {
        next(err);
    }
};

async function agregar (req, res, next){
    try {
        const result = await controlador.agregar(req.body);
        const mensaje = result.accion === 'insertado'
            ? 'ITEM guardado con éxito'
            : 'ITEM actualizado con éxito';
        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err);
    }
};

async function eliminar (req, res, next){
    console.log("Estoy recibiendo ",req.body)
    console.log("ID a eliminar:", id_products);
    try {
        const items = await controlador.eliminar(req.body);
        respuesta.success(req, res, 'ITEM eliminado satisfactoriamente', 200);
 
    } catch (err) {
        next(err);
    }
};

module.exports = router;