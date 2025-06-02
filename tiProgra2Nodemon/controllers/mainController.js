const data = require('../db/data');
let producto = data.productos;
const db = require("../database/models");
const op = db.Sequelize.Op;

const controller = {
    index: function (req, res) {
      db.Producto.findAll({
        include: [
          { model: db.Usuario, attributes: ['email'] },
          { model: db.Comentarios }
        ]
      })
      .then(function(productos) {
        res.render('index', { productos: productos });
      })
      .catch(function(error) {
        res.send(error);
      });
    },
    // Búsqueda (resultados estáticos)
    buscar: function (req, res) {
      const busqueda = req.query.busqueda;
      
      db.Producto.findAll({
        where: {
          nombre: {
            [op.like]: `%${busqueda}%`
          }
        },
        include: [
          { association: 'usuario' },
          { association: 'comentarios' }
        ]
      })
      .then(function(productosEncontrados) {
        res.send(productosEncontrados);
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
  