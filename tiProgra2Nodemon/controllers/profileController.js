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

  loginGet: function (req, res) {
    if (req.session.usuarioLogueado) {
      return res.redirect('/profile');
    }
    res.render('login');
  },

  loginPost: function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const recordarme = req.body.recordarme;

    if (usuario && usuario.email === email && bcrypt.compareSync(password, usuario.contrasena)) {
      // Guardar en sesión
      req.session.usuarioLogueado = usuario;
      
      // Si marcó recordarme, guardar en cookie
      if (recordarme) {
        res.cookie('recordarUsuario', email, {
          maxAge: 1000 * 60 * 60 * 24 * 30
        });
      }
      res.redirect('/profile');
    } else {
      res.render('login');
    }
  },

  logout: function(req, res) {
    
    req.session.destroy();
    res.clearCookie('recordarUsuario');
    res.redirect('/');
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

  