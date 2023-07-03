const express = require('express');
const router = express.Router();
const Venta = require('../models/venta');

// Listar todos los servicios
router.get('/ventas', async (req, res) => {
  try {
    const venta = await Venta.find();
    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las Ventas' });
  }
});

// Obtener un servicio por su ID
router.get('/ventas', async (req, res) => {
  try {
    const venta = await Servicio.findById(req.params.id);
    if (!venta) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }
    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la venta' });
  }
});

// Crear una nueva venta
router.post('/ventas', async (req, res) => {
  try {
    const venta = new Servicio(req.body);
    await venta.save();
    res.status(201).json(venta);
    console.log("Venta Ingresada" + venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la venta' });
  }
});

// Actualizar un servicio
router.put('/ventas/:id', async (req, res) => {
  try {
    const venta = await Servicio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!venta) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }
    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la venta' });
  }
});

// Eliminar un servicio
router.delete('/ventas/:id', async (req, res) => {
  try {
    const venta = await Venta.findByIdAndRemove(req.params.id);
    if (!venta) {
      return res.status(404).json({ error: 'Venta no encontrada' });
    }
    res.json({ message: 'Venta eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la venta' });
  }
});

module.exports = router;
