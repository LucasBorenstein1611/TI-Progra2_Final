const data = require('../db/data');
const usuario = data.usuario;
const productos = data.productos;

const controller = {
  // Detalle del producto y comentarios

  detalle: function (req, res) {
    const producto = productos[0]; 
  
    res.render('product', {
      producto: producto,
      comentario: producto.comentarios
    });
  },
  

  // Formulario para agregar producto
  agregar: function (req, res) {
    res.render('product-add', {
      usuario: usuario
    });
  },
};

module.exports = controller;
