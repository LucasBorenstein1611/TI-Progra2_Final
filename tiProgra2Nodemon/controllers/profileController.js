const data = require('../db/data');
const usuario = data.usuario;
const productos = data.productos;


const profileController = {

  index: function (req, res) {
    res.render('profile', {
      usuario: usuario,
      producto: productos
    });
  },

  login: function (req, res) {
    res.render('login');
  },

  register: function (req, res) {
    res.render('register');
  },
  
};

module.exports = profileController;

  