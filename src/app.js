const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const clientes = require('./modulos/rutas/rutasClientes')
const products = require('./modulos/rutas/rutasProductos')
const customers = require('./modulos/rutas/rutasCustomers')
const employees = require('./modulos/rutas/rutasEmployees')
const sales = require('./modulos/rutas/rutasSales')
const saleDetails = require('./modulos/rutas/rutasSaleDetails')
const suppliers = require('./modulos/rutas/rutasSuppliers')


const error = require('./red/errors');

const app = express();

//miderware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configuración
app.set('port', config.app.port);

//rutas
app.use('/api/clientes', clientes) 
app.use('/api/products',products )
app.use('/api/customers',customers )
app.use('/api/employees',employees )
app.use('/api/sales',sales )
app.use('/api/sale-details',saleDetails )
app.use('/api/suppliers',suppliers )
app.use(error);  

module.exports = app;