CREATE SCHEMA yoda_bd; 
USE yoda_bd;

CREATE TABLE users (

  id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL, 
  nombre VARCHAR(100) NOT NULL,
  contrasena VARCHAR(100) NOT NULL, 
  fecha DATE NOT NULL, 
  dni INT(10) UNIQUE NOT NULL, 
  foto VARCHAR(200) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP

);

CREATE TABLE products (

  id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INT(10) UNSIGNED NOT NULL,
  imagen VARCHAR(100), 
  nombre VARCHAR(100) NOT NULL,  
  descripcion VARCHAR(200),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  
  FOREIGN KEY (user_id) REFERENCES users(id)

);

CREATE TABLE comments (
  id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INT(10) UNSIGNED NOT NULL,
  product_id INT(10) UNSIGNED NOT NULL,   
  texto VARCHAR(200),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (product_id) REFERENCES products(id)

);


INSERT INTO users (email, nombre, contrasena, fecha, dni, foto) VALUES 
  ('agos@mail.com', 'Agos', '123456', '1998-05-15', 46364172, 'default-image.png'),
  ('simon@mail.com', 'Simon', '123456', '1998-05-15', 45364172, 'default-image.png'),
  ('lucas@mail.com', 'Lucas', '123456', '1998-05-15', 44364172, 'default-image.png'),
  ('yoda@mail.com', 'Yoda', '123456', '1998-05-15', 45366172, 'default-image.png'),
  ('messi@mail.com', 'Messi', '123456', '1998-05-15', 20364172, 'default-image.png');
 
INSERT INTO products (user_id, imagen, nombre, descripcion) VALUES
(1, 'Kurama2.jpg', 'Teclado Mecánico Redragon Kumara', 'Teclado mecánico RGB con switches blue.'),
(2, 'mouse.png', 'Mouse Logitech G502 HERO', 'Mouse gamer con sensor HERO 25K y 11 botones.'),
(3, 'Hyperx.png', 'Auriculares HyperX Cloud II', 'Sonido envolvente 7.1, micrófono desmontable.'),
(4, 'ASUSMONITOR.jpg', 'Monitor ASUS TUF 24''', '144Hz, 1ms, ideal para juegos competitivos.'),
(5, 'SILLAGAMER.JPG', 'Silla Gamer Cougar Armor One', 'Diseño ergonómico con soporte lumbar y cervical.'),
(1, 'mouse.png', 'Mousepad XL RGB', 'Tamaño extendido con bordes iluminados.'),
(2, 'Controlxbox.jpg', 'Control Xbox Series X', 'Compatible con PC y consola, conectividad bluetooth.'),
(3, 'webcamlogitechc920.jpg', 'Webcam Logitech C920', 'Full HD, ideal para streamers.'),
(4, 'blueyeti.jpg', 'Micrófono Blue Yeti', 'Calidad profesional, perfecto para streaming.'),
(5, 'netbookmsigamer.jpg', 'Notebook MSI Gaming', 'Diseño compacto, ideal para juegos en movimiento.');


INSERT INTO comments (user_id, product_id, texto) VALUES
(2, 1, 'Muy buena calidad, los switches hacen toda la diferencia.'),
(3, 1, 'Es cómodo para escribir y se siente resistente.'),
(4, 1, 'El RGB se ve increíble, lo uso todos los días.'),
(1, 2, 'Súper preciso, ideal para shooters.'),
(4, 2, 'Me encanta la forma, se adapta bien a la mano.'),
(5, 2, 'Buen sensor y muchos botones personalizables.'),
(2, 3, 'El sonido es envolvente, se nota la diferencia.'),
(5, 3, 'Lo uso para jugar y hacer videollamadas, 10/10.'),
(3, 3, 'Se escucha perfecto y el micrófono va muy bien.'),
(1, 4, 'Colores vibrantes y excelente tasa de refresco.'),
(2, 4, 'Perfecto para jugar competitivo, cero ghosting.'),
(4, 4, 'Muy buena relación precio-calidad.'),
(3, 5, 'La silla es cómoda y fácil de armar.'),
(1, 5, 'Buena postura para largas sesiones de juego.'),
(5, 5, 'El respaldo y los apoyabrazos son muy firmes.'),
(2, 6, 'Me encanta el tamaño, cubre todo el escritorio.'),
(4, 6, 'Los bordes con luces le dan mucha facha.'),
(1, 6, 'Buena textura, el mouse se desliza perfecto.'),
(5, 7, 'Se siente sólido, muy buena calidad de construcción.'),
(3, 7, 'Conexión rápida, sin delay. Lo uso también en PC.'),
(2, 7, 'Los gatillos son suaves y precisos.'),
(4, 8, 'La imagen es nítida, ideal para Zoom o stream.'),
(1, 8, 'Excelente calidad para su precio.'),
(5, 8, 'Buena definición, incluso con poca luz.'),
(2, 9, 'Capta la voz clara, sin ruidos de fondo.'),
(3, 9, 'Lo uso para grabar podcasts, muy pro.'),
(1, 9, 'Fácil de configurar, suena muy bien.'),
(4, 10, 'Potente para su tamaño, corre juegos sin problema.'),
(5, 10, 'Ligera, ideal para moverla. Muy fluida.'),
(2, 10, 'Funciona bárbaro para gaming y edición básica.');
