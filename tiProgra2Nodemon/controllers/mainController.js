const data = require('../db/data');
const producto = data.productos;

const controller = {
    index: function (req, res) {
      const productos = producto[0]
      res.render('index', {
        nombre: productos.nombre,
        detalle: productos.descripcion,
        cantidad: productos.comentarios.length
      });
    },
  
    login: function (req, res) {
      res.render('login');
    },
  
    register: function (req, res) {
      res.render('register');
    },
    
  };
  
  module.exports = controller;
  