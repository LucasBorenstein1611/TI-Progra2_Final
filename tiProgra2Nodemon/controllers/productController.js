const data = require('../db/data');
let usuario = data.usuario;
const productos = data.productos;
const db = require('../database/models');
const op = db.Sequelize.Op;

const controller = {

  detalle: function (req, res) {
    db.Producto.findByPk(req.params.id, {
      include: [
        { association: 'usuario' },
        { association: 'comentarios', include: [{ association: 'usuario' }] }
      ]
    })
    .then(function(producto) {
      if (producto) {
        res.render('product', {
          producto: producto
        });
      } else {
        res.render('error', {
          message: 'Producto no encontrado',
          error: {}
        });
      }
    })
    .catch(function(error) {
      console.error('Error al buscar el producto:', error);
      res.render('error', {
        message: 'Producto no encontrado',
        error: {}
      });
    });
  },

  agregar: function (req, res) {
    console.log('Estado de la sesión de usuario al intentar agregar producto:', req.session.usuarioLogueado);
    if (!req.session.usuarioLogueado) {
      return res.redirect('/login');
    }
    res.render('product-add', {
      usuario: req.session.usuarioLogueado
    });
  },

  guardar: function (req, res) {
    if (!req.session.usuarioLogueado) {
      return res.redirect('/login');
    }

    const { nombre, descripcion, imagen } = req.body;

    if (!imagen) {
      return res.render('error', {
        message: 'Por favor ingresa el nombre de la imagen',
        error: {}
      });
    }

    // Crear el producto en la base de datos
    db.Producto.create({
      user_id: req.session.usuarioLogueado.id,
      imagen: imagen,
      nombre: nombre,
      descripcion: descripcion
    })
    .then(function() {
      res.redirect('/');
    })
    .catch(function(error) {
      console.error('Error al crear el producto:', error);
      res.render('error', {
        message: 'Error al crear el producto',
        error: {}
      });
    });
  },

  agregarComentario: function(req, res) {
    if (!req.session.usuarioLogueado) {
      return res.redirect('/profile/login');
    }

    const product_id = req.params.id;
    const user_id = req.session.usuarioLogueado.id;
    const texto = req.body.texto;

    if (!texto) {
        return res.redirect('/products/' + product_id);
    }

    db.Comentarios.create({
      product_id: product_id,
      user_id: user_id,
      texto: texto,
      createdAt: new Date() 
    })
    .then(function() {
      res.redirect('/products/' + product_id);
    })
    .catch(function(error) {
      console.error('Error al crear el comentario:', error);
      res.redirect('/products/' + product_id);
    });
  }
};

module.exports = controller;
