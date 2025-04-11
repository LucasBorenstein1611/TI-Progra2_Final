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
      imagen: "/images/products/Kurama2.jpg",
      comentarios: [
        {
          nombreUsuario: "MeliR",
          texto: "Lo uso hace meses, súper cómodo para escribir y jugar.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "Sofi88",
          texto: "Excelente relación calidad-precio. El RGB se ve increíble.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "MaxPower",
          texto: "Los switches azules hacen ruido pero se sienten geniales.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 2,
      nombre: "Mouse Logitech G502 HERO",
      descripcion: "Mouse gamer con sensor HERO 25K y 11 botones.",
      imagen: "/images/products/mouse.png",
      comentarios: [
        {
          nombreUsuario: "Sofi88",
          texto: "Preciso, rápido y los botones extra son muy útiles.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "MaxPower",
          texto: "Ideal para shooters. Muy ergonómico.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "JuliTech",
          texto: "Sensor impecable, responde al instante.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 3,
      nombre: "Auriculares HyperX Cloud II",
      descripcion: "Sonido envolvente 7.1, micrófono desmontable.",
      imagen: "/images/products/Hyperx.png",
      comentarios: [
        {
          nombreUsuario: "MaxPower",
          texto: "Los graves suenan potentes, y el mic anda bien.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "JuliTech",
          texto: "Aíslan bien el sonido externo, muy cómodos.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "GamerGirl",
          texto: "El mejor headset que tuve hasta ahora.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 4,
      nombre: "Monitor ASUS TUF 24''",
      descripcion: "144Hz, 1ms, ideal para juegos competitivos.",
      imagen: "/images/products/ASUSMONITOR.jpg",
      comentarios: [
        {
          nombreUsuario: "JuliTech",
          texto: "Fluidez espectacular, no hay ghosting.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "GamerGirl",
          texto: "Gran brillo y nitidez, ideal para FPS.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "LucasB",
          texto: "Noté un gran cambio desde que lo uso.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 5,
      nombre: "Silla Gamer Cougar Armor One",
      descripcion: "Diseño ergonómico con soporte lumbar y cervical.",
      imagen: "/images/products/SILLAGAMER.JPG",
      comentarios: [
        {
          nombreUsuario: "GamerGirl",
          texto: "Puedo estar horas sentado sin dolor de espalda.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "LucasB",
          texto: "Muy firme y cómoda, fácil de armar.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "MeliR",
          texto: "Estética top, me encanta como se ve.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 6,
      nombre: "Mousepad XL RGB",
      descripcion: "Tamaño extendido con bordes iluminados.",
      imagen: "/images/products/mouse.png",
      comentarios: [
        {
          nombreUsuario: "LucasB",
          texto: "Espacio de sobra para mover el mouse.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "MeliR",
          texto: "La iluminación le suma un montón al setup.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "Sofi88",
          texto: "Textura suave, desliza perfecto.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 7,
      nombre: "Control Xbox Series X",
      descripcion: "Compatible con PC y consola, conectividad bluetooth.",
      imagen: "/images/products/Controlxbox.jpg",
      comentarios: [
        {
          nombreUsuario: "MeliR",
          texto: "Se siente sólido, ideal para jugar en compu o consola.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "Sofi88",
          texto: "Muy buena respuesta en todos los botones.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "MaxPower",
          texto: "Conexión rápida y sin lag.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 8,
      nombre: "Webcam Logitech C920",
      descripcion: "Full HD, ideal para streamers.",
      imagen: "/images/products/webcamlogitechc920.jpg",
      comentarios: [
        {
          nombreUsuario: "Sofi88",
          texto: "La calidad de imagen es nítida y clara.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "MaxPower",
          texto: "Funciona bien incluso con poca luz.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "JuliTech",
          texto: "Perfecta para hacer videollamadas o stream.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 9,
      nombre: "Micrófono Blue Yeti",
      descripcion: "Calidad profesional, perfecto para streaming.",
      imagen: "/images/products/blueyeti.jpg",
      comentarios: [
        {
          nombreUsuario: "MaxPower",
          texto: "Capta muy bien la voz y filtra ruido de fondo.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "JuliTech",
          texto: "Lo uso para grabar podcast y va de diez.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "GamerGirl",
          texto: "Sonido súper limpio, ideal para directos.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    },
    {
      id: 10,
      nombre: "Notebook MSI Gaming",
      descripcion: "Diseño compacto, ideal para juegos en movimiento.",
      imagen: "/images/products/netbookmsigamer.jpg",
      comentarios: [
        {
          nombreUsuario: "JuliTech",
          texto: "Liviana pero potente, corre todos los juegos.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "GamerGirl",
          texto: "Batería dura bastante y se ve genial.",
          imagenPerfil: "/images/users/default-image.png"
        },
        {
          nombreUsuario: "LucasB",
          texto: "Ideal para estudiar y jugar a la vez.",
          imagenPerfil: "/images/users/default-image.png"
        }
      ]
    }
  ]
};

module.exports = data;
