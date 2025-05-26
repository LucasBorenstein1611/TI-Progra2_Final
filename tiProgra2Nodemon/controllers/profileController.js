const data = require('../db/data');
const usuario = data.usuario;
const productos = data.productos;
const db = require("../database/models");
const bcrypt = require('bcryptjs');

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
    if (usuario) {
      return res.redirect('/profile');
    }
    res.render('register');
  },

  validateEmail: function (req, res) {
    const email = req.query.email;
    
    if (usuario.email === email) {
      return res.send('Este email ya está registrado');
    }

    return res.send('Email disponible');
  },

  validatePassword: function (req, res) {
    const password = req.query.password;
    
    if (password.length < 3) {
      return res.send('La contraseña debe tener al menos 3 caracteres');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    
    return res.send('Contraseña válida');
  },

  create: function (req, res) {
    const newUser = {
      email: req.query.email,
      contrasena: bcrypt.hashSync(req.query.password, 10),
      fecha: req.query.fechaNacimiento,
      dni: req.query.documento,
      foto: req.query.foto,
      createdAt: new Date()
    };

    usuario = newUser;
    res.redirect('/profile');
  }
};

module.exports = profileController;

  