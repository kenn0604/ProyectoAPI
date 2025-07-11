const db = require('../../DB/mysql');

const TABLA = 'users';
//en la arqui se llama MVC (modelo vista controlador )

//funcion getall
function todos () {
    return db.todos(TABLA);
}
//funcion getbyid
function uno (id) {
    return db.uno(TABLA,id);
}
//funcion delete
function eliminar (body) {
    return db.eliminar(TABLA,body);
}
//funcion add
function agregar (body) {
    return db.agregar(TABLA,body);
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar
}