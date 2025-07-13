const db = require('../../DB/mysql');
const TABLA = 'tb_sales';

function todos() {
    return db.todos(TABLA);
}

function uno(id) {
    return db.uno(TABLA, id, 'sale_id');
}

function agregar(body) {
    return db.agregar(TABLA, body, 'sale_id');
}

function eliminar(body) {
    return db.eliminar(TABLA, body, 'sale_id');
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
};
