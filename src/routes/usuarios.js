const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Ruta para obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un usuario por ID
router.get('/usuarios/:id', getUsuario, (req, res) => {
  res.json(res.usuario);
});

// Ruta para crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
  const usuario = new Usuario({
    nombre: req.body.nombre,
    contrasenia: req.body.contrasenia,
    email: req.body.email,
    rol: req.body.rol
  });

  try {
    const nuevoUsuario = await usuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para actualizar un usuario
router.patch('/usuarios/:id', getUsuario, async (req, res) => {
  if (req.body.nombre != null) {
    res.usuario.nombre = req.body.nombre;
  }
  if (req.body.contrasenia != null) {
    res.usuario.contrasenia = req.body.contrasenia;
  }
  if (req.body.email != null) {
    res.usuario.email = req.body.email;
  }
  if (req.body.rol != null) {
    res.usuario.rol = req.body.rol;
  }

  try {
    const usuarioActualizado = await res.usuario.save();
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para eliminar un usuario
router.delete('/usuarios/:id', getUsuario, async (req, res) => {
  try {
    await res.usuario.remove();
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware para obtener un usuario por ID
async function getUsuario(req, res, next) {
  let usuario;
  try {
    usuario = await Usuario.findById(req.params.id);
    if (usuario == null) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.usuario = usuario;
  next();
}

module.exports = router;
