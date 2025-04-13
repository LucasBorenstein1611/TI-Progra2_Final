const data = require('../db/data');
const producto = data.productos;

const controller = {
    index: function (req, res) {
      res.render('index', {productos: producto});
    },
    // Búsqueda (resultados estáticos)
    buscar: function (req, res) {
      let termino = req.query.busqueda.toLowerCase();
      let resultados = [];
    
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre.toLowerCase() === termino) {
          resultados.push(productos[i]);
        }
      }
      
      res.render('search-results', {
        busqueda: termino,
        resultados: resultados
      });
    }
    
  };
  
  module.exports = controller;
  