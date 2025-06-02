const data = require('../db/data');
let producto = data.productos;
const db = require("../database/models");

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
      let termino = req.query.busqueda.toLowerCase();

      db.Producto.findAll({
        where: {
          nombre: { [db.Sequelize.Op.like]: `%${termino}%` }
        },
        include: [
          { model: db.Usuario, attributes: ['id', 'email', 'nombre'] }
        ]
      })
      .then(function(productos) {
        res.render('search-results', {
          busqueda: termino,
          productos: productos
        });
      })
      .catch(function(error) {
        res.send(error);
      });
    }
  };
  
  module.exports = controller;
  