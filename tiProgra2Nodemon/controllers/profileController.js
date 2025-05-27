const data = require('../db/data');
let usuario = data.usuario;
const productos = data.productos;
const db = require("../database/models");
const bcrypt = require('bcryptjs');

const profileController = {

  index: function (req, res) {
    if (!req.session.usuarioLogueado) {
      return res.redirect('/profile/login');
    }
    const userId = req.session.usuarioLogueado.id;
    db.Producto.findAll({
      where: { user_id: userId }
    })
    .then(function(productosDelUsuario) {
      res.render('profile', {
        usuario: req.session.usuarioLogueado,
        producto: productosDelUsuario // así producto.length será el total
      });
    });
  },


  register: function (req, res) {
    if (req.session.usuarioLogueado) {
      return res.redirect('/profile');
    } else {
      res.render('register');
    }
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
      email: req.body.email,
      nombre: req.body.nombre,
      contrasena: bcrypt.hashSync(req.body.password, 10),
      fecha: req.body.fechaNacimiento,
      dni: req.body.documento,
      foto: req.body.foto,
      createdAt: new Date()
    };

    db.Usuario.create(newUser)
      .then(usuarioCreado => {
        req.session.usuarioLogueado = {
          id: usuarioCreado.id,
          nombre: usuarioCreado.nombre,
          email: usuarioCreado.email,
          // ...otros campos si querés
        };
        res.redirect('/profile');
      })
      .catch(error => {
        console.error('Error al crear usuario:', error);
        res.render('register', { error: 'Hubo un error al crear el usuario.' });
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

    // Validar email
    if (!usuario || usuario.email !== email) {
      return res.render('login', { error: 'El email no existe.' });
    }

    // Validar contraseña
    if (!bcrypt.compareSync(password, usuario.contrasena)) {
      return res.render('login', { error: 'La contraseña es incorrecta.' });
    }

    // Guardar en sesión
    req.session.usuarioLogueado = {
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      // ...otros campos si querés
    };

    // Si marcó recordarme, guardar en cookie
    if (recordarme) {
      res.cookie('recordarUsuario', email, {
        maxAge: 1000 * 60 * 60 * 24 * 30 // 30 días
      });
    }

    res.redirect('/profile');
  },

  logout: function (req, res) {
    req.session.destroy(function() {
      res.redirect('/');
    });
  }
};

module.exports = profileController;

  