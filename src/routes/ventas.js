const express = require('express');
const router = express.Router();
const Venta = require('../models/venta');

// Listar todas las ventas
router.get('/ventas', async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las Ventas' });
  }
});

// Obtener una venta por su ID
router.get('/ventas/:id', async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
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
    const venta = new Venta(req.body);
    await venta.save();
    res.status(201).json(venta);
    console.log('Venta ingresada:', venta);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la venta' });
  }
});

// Actualizar una venta
router.patch('/ventas/:id', async (req, res) => {
  try {
    const venta = await Venta.findByIdAndUpdate(req.params.id, req.body, {
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

// Eliminar una venta
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

// Obtener ventas pagadas
router.get('/ventas/pagadas', async (req, res) => {
  try {
    const ventas = await Venta.find({ estaPagada: true });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las Ventas pagadas' });
  }
});

// Obtener ventas terminadas
router.get('/ventas/terminadas', async (req, res) => {
  try {
    const ventas = await Venta.find({ estaTerminada: true });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las Ventas terminadas' });
  }
});

// Obtener el total de ventas
router.get('/ventas/total', async (req, res) => {
  try {
    const totalVentas = await Venta.countDocuments();
    res.json(totalVentas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el total de Ventas' });
  }
});

// Obtener ventas en un rango de fechas
router.get('/ventas/rango', async (req, res) => {
  try {
    const { fechaInicio, fechaFin } = req.query;

    if (!fechaInicio || !fechaFin) {
      return res.status(400).json({ error: 'Se requiere fecha de inicio y fin' });
    }

    const ventas = await Venta.find({
      fechaCreacion: {
        $gte: new Date(new Date(fechaInicio).setHours(0, 0, 0)),
        $lte: new Date(new Date(fechaFin).setHours(23, 59, 59))
      }
    });

    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las Ventas en rango de fechas' });
  }
});

module.exports = router;
