const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const port = 3001;
const User = require('./schemas/usuario');

// Conectar a la base de datos
mongoose.connect('mongodb+srv://erwil:Piramide30.@cluster0.1srnj6u.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a la base de datos');
}).catch((error) => {
  console.log('Error al conectar a la base de datos:', error.message);
});

// Manejamos la solicitud de registro de usuario
app.post('/registro', async (req, res) => {
  try {
    // Creamos un nuevo usuario a partir de los datos recibidos en el cuerpo de la solicitud
    const user = new User(req.body);

    // Guardamos el usuario en la base de datos
    await user.save();

    // Enviamos la respuesta con el usuario creado
    res.status(201).json(user);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
