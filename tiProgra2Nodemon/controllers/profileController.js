const data = require('../db/data');
let usuario = data.usuario;
const productos = data.productos;
const db = require("../database/models");
const bcrypt = require('bcryptjs');

const profileController = {

  register: function (req, res) {
    if (req.session.usuarioLogueado) {
      return res.redirect('/profile/' + req.session.usuarioLogueado.id);
    } else {
      res.render('register', { error: null });
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
      .then(function(usuarioCreado) {
        req.session.usuarioLogueado = usuarioCreado;
        res.redirect('/profile/' + usuarioCreado.id);
      })
      .catch(function(error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          // Renderiza la vista de registro con el mensaje de error
          return res.render('register', { error: 'El email ya está registrado.' });
        }
        res.status(500).send('Ocurrió un error al crear el usuario.');
      });
  },

  loginGet: function (req, res) {
    if (req.session.usuarioLogueado) {
      return res.redirect('/profile/' + req.session.usuarioLogueado.id);
    }
    res.render('login', { error: null });
  },

  loginPost: function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const recordarme = req.body.recordarme;

    db.Usuario.findOne({ where: { email: email } })
      .then(function(usuario) {
        if (!usuario) {
          return res.render('login', { error: 'El email no existe.' });
        }
        if (!bcrypt.compareSync(password, usuario.contrasena)) {
          return res.render('login', { error: 'La contraseña es incorrecta.' });
        }
        req.session.usuarioLogueado = usuario;
        res.locals.usuarioLogueado = usuario;
        if (recordarme) {
          res.cookie('recordarUsuario', email, {
            maxAge: 1000 * 60 * 60 * 24 * 30 // 30 días
          });
        }
        res.redirect('/profile/' + usuario.id);
      })
      .catch(function(error) {
        res.send(error);
      });
  },

  logout: function (req, res) {
    req.session.destroy(function() {
      res.redirect('/');
    });
  },

  show: function (req, res) {
    db.Usuario.findByPk(req.params.id, {
      include: [
        { association: 'productos', include: [
          { association: 'comentarios' }
        ] },
        { association: 'comentarios' }
      ]
    })
      .then(function(usuario) {
        if (!usuario) {
          return res.send('Usuario no encontrado');
        }
        

        res.render('profile', {
          usuario: usuario,
          producto: usuario.productos
        });
      })
      .catch(function(error) {
        res.send(error);
      });
  }
};

module.exports = profileController;

  