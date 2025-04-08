const data = require('../db/data');
const usuario = data.usuario;
const producto = data.productos;


const profileController = {

  index: function (req, res) {
    const productos = producto[0]
    res.render('profile', {
      usuario: usuario.nombre,
      producto: productos.nombre,
      detalle: productos.descripcion,
      cantidad: productos.comentarios.length
    });
  },
  header: function (req, res) {
    res.render("headerLogueado", {
        usuario: usuario
    })
  },
  
};

module.exports = profileController;

  