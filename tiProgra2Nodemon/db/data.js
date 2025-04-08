const data = {
    usuario: {
      id: 1,
      nombre: "Agos Paladino",
      email: "agos@mail.com",
      usuario: "agospala",
      contraseña: "123456",
      fechaNacimiento: "1998-05-15",
      documento: 46364172,
      fotoPerfil: "/images/users/default-image.png"
    },
  
    productos: [
      {
        id: 1,
        nombre: "Teclado Mecánico Redragon Kumara",
        descripcion: "Teclado mecánico RGB con switches blue.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "MeliR",
            texto: "Comentario 1 sobre Teclado Mecánico Redragon Kumara. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "Sofi88",
            texto: "Comentario 2 sobre Teclado Mecánico Redragon Kumara. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "MaxPower",
            texto: "Comentario 3 sobre Teclado Mecánico Redragon Kumara. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 2,
        nombre: "Mouse Logitech G502 HERO",
        descripcion: "Mouse gamer con sensor HERO 25K y 11 botones.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "Sofi88",
            texto: "Comentario 1 sobre Mouse Logitech G502 HERO. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "MaxPower",
            texto: "Comentario 2 sobre Mouse Logitech G502 HERO. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "JuliTech",
            texto: "Comentario 3 sobre Mouse Logitech G502 HERO. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 3,
        nombre: "Auriculares HyperX Cloud II",
        descripcion: "Sonido envolvente 7.1, micrófono desmontable.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "MaxPower",
            texto: "Comentario 1 sobre Auriculares HyperX Cloud II. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "JuliTech",
            texto: "Comentario 2 sobre Auriculares HyperX Cloud II. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "GamerGirl",
            texto: "Comentario 3 sobre Auriculares HyperX Cloud II. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 4,
        nombre: "Monitor ASUS TUF 24''",
        descripcion: "144Hz, 1ms, ideal para juegos competitivos.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "JuliTech",
            texto: "Comentario 1 sobre Monitor ASUS TUF 24''. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "GamerGirl",
            texto: "Comentario 2 sobre Monitor ASUS TUF 24''. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "LucasB",
            texto: "Comentario 3 sobre Monitor ASUS TUF 24''. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 5,
        nombre: "Silla Gamer Cougar Armor One",
        descripcion: "Diseño ergonómico con soporte lumbar y cervical.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "GamerGirl",
            texto: "Comentario 1 sobre Silla Gamer Cougar Armor One. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "LucasB",
            texto: "Comentario 2 sobre Silla Gamer Cougar Armor One. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "MeliR",
            texto: "Comentario 3 sobre Silla Gamer Cougar Armor One. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 6,
        nombre: "Mousepad XL RGB",
        descripcion: "Tamaño extendido con bordes iluminados.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "LucasB",
            texto: "Comentario 1 sobre Mousepad XL RGB. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "MeliR",
            texto: "Comentario 2 sobre Mousepad XL RGB. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "Sofi88",
            texto: "Comentario 3 sobre Mousepad XL RGB. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 7,
        nombre: "Control Xbox Series X",
        descripcion: "Compatible con PC y consola, conectividad bluetooth.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "MeliR",
            texto: "Comentario 1 sobre Control Xbox Series X. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "Sofi88",
            texto: "Comentario 2 sobre Control Xbox Series X. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "MaxPower",
            texto: "Comentario 3 sobre Control Xbox Series X. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 8,
        nombre: "Webcam Logitech C920",
        descripcion: "Full HD, ideal para streamers.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "Sofi88",
            texto: "Comentario 1 sobre Webcam Logitech C920. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "MaxPower",
            texto: "Comentario 2 sobre Webcam Logitech C920. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "JuliTech",
            texto: "Comentario 3 sobre Webcam Logitech C920. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 9,
        nombre: "Micrófono Blue Yeti",
        descripcion: "Calidad profesional, perfecto para streaming.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "MaxPower",
            texto: "Comentario 1 sobre Micrófono Blue Yeti. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "JuliTech",
            texto: "Comentario 2 sobre Micrófono Blue Yeti. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "GamerGirl",
            texto: "Comentario 3 sobre Micrófono Blue Yeti. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      },
      {
        id: 10,
        nombre: "Notebook MSI Gaming",
        descripcion: "Diseño compacto, ideal para juegos en movimiento.",
        imagen: "/images/products/default-image.png",
        comentarios: [
          {
            nombreUsuario: "JuliTech",
            texto: "Comentario 1 sobre Notebook MSI Gaming. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "GamerGirl",
            texto: "Comentario 2 sobre Notebook MSI Gaming. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          },
          {
            nombreUsuario: "LucasB",
            texto: "Comentario 3 sobre Notebook MSI Gaming. Muy recomendado.",
            imagenPerfil: "/images/users/default-image.png"
          }
        ]
      }
    ]
  };
  
module.exports = data;
  