const data = require('../db/data');
const producto = data.productos;
const db = require("../database/models");

const controller = {
    index: function (req, res) {
      res.render('index', {productos: producto});
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
        resultados: resultados
      });
    }
    
  };
  
  module.exports = controller;
  