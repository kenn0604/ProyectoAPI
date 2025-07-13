const db = require('../../DB/mysql');

const TABLA = 'tb_products';
//en la arqui se llama MVC (modelo vista controlador )

//funcion getall
function todos () {
    return db.todos(TABLA);
}
//funcion getbyid
function uno (id) {
    return db.uno(TABLA,id,'id_product');
}
//funcion delete
function eliminar (body) {
    return db.eliminar(TABLA,body,'id_product');
}
//funcion add
function agregar (body) {
    return db.agregar(TABLA,body,'id_product');
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}