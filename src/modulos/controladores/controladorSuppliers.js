const db = require('../../DB/mysql');
const TABLA = 'tb_suppliers';

function todos() {
    return db.todos(TABLA);
}

function uno(id) {
    return db.uno(TABLA, id, 'supplier_id');
}

function agregar(body) {
    return db.agregar(TABLA, body, 'supplier_id');
}

function eliminar(body) {
    return db.eliminar(TABLA, body, 'supplier_id');
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
};
