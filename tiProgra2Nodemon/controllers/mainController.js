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
      let resultados = [];
    
      for (let i = 0; i < producto.length; i++) {
        if (producto[i].nombre.toLowerCase().includes(termino)) {
          resultados.push(producto[i]);
        }
      }
      
      res.render('search-results', {
        busqueda: termino,
        productos: resultados
      });
    }
  };
  
  module.exports = controller;
  