const db = require('../../DB/mysql');

const TABLA = 'tb_customers';
//en la arqui se llama MVC (modelo vista controlador )

//funcion getall
function todos () {
    return db.todos(TABLA);
}
//funcion getbyid
function uno (id) {
    return db.uno(TABLA,id, 'customer_id');
}
//funcion delete
function eliminar (body) {
     return db.eliminar(TABLA, body, 'customer_id');
}
//funcion add
function agregar(body) {
    return db.agregar(TABLA, body, 'customer_id');
}


module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}