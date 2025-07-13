const db = require('../../DB/mysql');
const TABLA = 'tb_sale_details';

function todos() {
    return db.todos(TABLA);
}

function uno(id) {
    return db.uno(TABLA, id, 'detail_id');
}

function agregar(body) {
    return db.agregar(TABLA, body, 'detail_id');
}

function eliminar(body) {
    return db.eliminar(TABLA, body, 'detail_id');
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
};
