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
  

  // Formulario para crear producto
  crear: function (req, res) {
    res.render('product-add', {
      usuario: usuario
    });
  },

  // Búsqueda (resultados estáticos)
  buscar: function (req, res) {
    let termino = req.query.busqueda.toLowerCase();
    let resultados = [];
  
    for (let i = 0; i < producto.length; i++) {
      if (productos[i].nombre.toLowerCase() === termino) {
        resultados.push(productos[i]);
      }
    }
  
    res.render('search-results', {
      busqueda: termino,
      resultados: resultados
    });
  },
  
  
  
};

module.exports = controller;
