const express = require('express');
const router = express.Router();
const Categoria = require('../models/categoria');

// Ruta para obtener todas las categorías
router.get('/categoria', async (req, res) => {
  try {
    const categorias = await Categoria.find();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener una categoría por ID
router.get('/categoria/:id', getCategoria, (req, res) => {
  res.json(res.categoria);
});

// Ruta para crear una nueva categoría
router.post('/categoria', async (req, res) => {
  const categoria = new Categoria({
    idCategoria: req.body.idCategoria,
    nombre: req.body.nombre,
    totalProductos: req.body.totalProductos
  });

  try {
    const nuevaCategoria = await categoria.save();
    res.status(201).json(nuevaCategoria);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para actualizar una categoría
router.patch('/categoria/:id', getCategoria, async (req, res) => {
  if (req.body.idCategoria != null) {
    res.categoria.idCategoria = req.body.idCategoria;
  }
  if (req.body.nombre != null) {
    res.categoria.nombre = req.body.nombre;
  }
  if (req.body.totalProductos != null) {
    res.categoria.totalProductos = req.body.totalProductos;
  }

  try {
    const categoriaActualizada = await res.categoria.save();
    res.json(categoriaActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para eliminar una categoría
router.delete('/categoria/:id', getCategoria, async (req, res) => {
  try {
    await res.categoria.remove();
    res.json({ message: 'Categoría eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware para obtener una categoría por ID
async function getCategoria(req, res, next) {
  let categoria;
  try {
    categoria = await Categoria.findById(req.params.id);
    if (categoria == null) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.categoria = categoria;
  next();
}

module.exports = router;
