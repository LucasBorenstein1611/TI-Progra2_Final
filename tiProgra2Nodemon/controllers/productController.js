const data = require('../db/data');
let usuario = data.usuario;
const productos = data.productos;
const db = require('../database/models');
const op = db.Sequelize.Op;

const controller = {

  detalle: function (req, res) {
    db.Producto.findByPk(req.params.id, {
      include: [
        { association: 'usuario' },
        { association: 'comentarios', include: [{ association: 'usuario' }] }
      ]
    })
    .then(function(producto) {
      if (producto) {
        res.render('product', {
          producto: producto
        });
      } else {
        res.render('error', {
          message: 'Producto no encontrado',
          error: {}
        });
      }
    })
    .catch(function(error) {
      console.error('Error al buscar el producto:', error);
      res.render('error', {
        message: 'Producto no encontrado',
        error: {}
      });
    });
  },

  // Formulario para agregar producto
  agregar: function (req, res) {
    res.render('product-add', {
      usuario: usuario
    });
  },

  // Buscar productos
  
};

module.exports = controller;
