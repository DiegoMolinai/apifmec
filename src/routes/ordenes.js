const express = require('express');
const router = express.Router();
const Orden = require('../models/orden');

// Ruta para obtener todas las órdenes
router.get('/ordenes', async (req, res) => {
  try {
    const ordenes = await Orden.find();
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener una orden por ID
router.get('/ordenes/:id', getOrden, (req, res) => {
  res.json(res.orden);
});

// Ruta para crear una nueva orden
router.post('/ordenes/', async (req, res) => {
  const orden = new Orden({
    idOrden: req.body.idOrden,
    fecha: req.body.fecha,
    tipo: req.body.tipo,
    totalOrdenes: req.body.totalOrdenes
  });

  try {
    const nuevaOrden = await orden.save();
    res.status(201).json(nuevaOrden);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para actualizar una orden
router.patch('/ordenes/:id', getOrden, async (req, res) => {
  if (req.body.idOrden != null) {
    res.orden.idOrden = req.body.idOrden;
  }
  if (req.body.fecha != null) {
    res.orden.fecha = req.body.fecha;
  }
  if (req.body.tipo != null) {
    res.orden.tipo = req.body.tipo;
  }
  if (req.body.totalOrdenes != null) {
    res.orden.totalOrdenes = req.body.totalOrdenes;
  }

  try {
    const ordenActualizada = await res.orden.save();
    res.json(ordenActualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para eliminar una orden
router.delete('/ordenes/:id', getOrden, async (req, res) => {
  try {
    await res.orden.remove();
    res.json({ message: 'Orden eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware para obtener una orden por ID
async function getOrden(req, res, next) {
  let orden;
  try {
    orden = await Orden.findById(req.params.id);
    if (orden == null) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.orden = orden;
  next();
}

module.exports = router;
