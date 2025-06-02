const data = require('../db/data');
let usuario = data.usuario;
const productos = data.productos;
const db = require('../database/models');
const op = db.Sequelize.Op;

const controller = {

  detalle: function (req, res) {
    db.Producto.findByPk(req.params.id, {
      include: [
        { association: 'Usuario' },
        { association: 'Comentarios', include: [{ association: 'Usuario' }] }
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
  buscar: function (req, res) {
    const busqueda = req.query.busqueda;
    
    db.Producto.findAll({
      where: {
        nombre: {
          [op.like]: `%${busqueda}%`
        }
      },
      include: [
        { association: 'Usuario' },
        { association: 'Comentarios' }
      ]
    })
    .then(function(productosEncontrados) {
      
      res.render('search-results', {
        productos: productosEncontrados,
        busqueda: busqueda
      });
    })
    .catch(function(error) {
      console.error('Error en la búsqueda:', error);
      res.render('search-results', {
        productos: [],
        busqueda: busqueda,
        error: 'Hubo un error al realizar la búsqueda'
      });
    });
  }
};

module.exports = controller;
