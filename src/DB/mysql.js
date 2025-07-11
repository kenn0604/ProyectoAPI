const mysql = require('mysql2');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}

let conexion;

function conMysql(){
    conexion = mysql.createConnection(dbconfig);

    conexion.connect((err) => {
        if(err){
            console.log(['[db err]'], err);
            setTimeout(conMysql, 200);
        } else{
            console.log('DB conectada!!!')
        }
    });

    conexion.on('error', err => {
        console.log(['[db err]'], err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conMysql();
        }else{
            throw err;
        }
    })
}

conMysql();

function todos(tabla){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla}`, (error, result) => {
            return error ? reject(error) : resolve(result);
        })
    });
}

function uno(tabla, id, idCampo = 'id'){
    return new Promise( (resolve, reject) => {
        conexion.query(`SELECT * FROM ${tabla} WHERE ${idCampo} = ?`, (error, result) => {
            return error ? reject(error) : resolve(result);

        })
    });     
}

function insertar(tabla, data){
    return new Promise( (resolve, reject) => {
        conexion.query(`INSERT INTO ${tabla} SET ?`,data,(error, result) => {
            return error ? reject(error) : resolve(result);

        })
    }); 
}

function actualizar(tabla, data,){
    return new Promise( (resolve, reject) => {
        conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`,[data,data.id],(error, result) => {
            return error ? reject(error) : resolve(result);

        })
    }); 
}

// function agregar(tabla, data){
//     if(data && data.id == 0){
//         return insertar(tabla, data);
//     }else{
//         return actualizar(tabla, data);
//     }
// }
function agregar(tabla, data, idCampo = 'id') {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT COUNT(*) AS total FROM ${tabla} WHERE ${idCampo} = ?`, [data.id], (error, result) => {
            if (error) return reject(error);

            const existe = result[0].total > 0;

            if (!data.id || data.id == 0 || !existe) {
                // Insertar si no existe o id es 0
                conexion.query(`INSERT INTO ${tabla} SET ?`, data, (error, result) => {
                    return error ? reject(error) : resolve(result);
                });
            } else {
                // Actualizar si ya existe
                conexion.query(`UPDATE ${tabla} SET ? WHERE id = ?`, [data, data.id], (error, result) => {
                    return error ? reject(error) : resolve(result);
                });
            }
        });
    });
}


function eliminar(tabla, data, idCampo = 'id') {
    return new Promise((resolve, reject) => {
        conexion.query( `DELETE FROM ${tabla} WHERE ${idCampo} = ?`,[data[idCampo]],(error, result) => {
                return error ? reject(error) : resolve(result);
            }
        );
    });
}

module.exports = {
    todos,
    uno,
    agregar,
    eliminar,
    actualizar,
    insertar, 
}