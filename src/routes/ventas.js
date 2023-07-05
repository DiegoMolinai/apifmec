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

// Actualizar una venta
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


//Obtener Ventas basado en si estan pagadas o no:

router.get('/ventas/pagadas', async (req, res) => {
  try {
    const ventas = await Venta.find({ estaPagada: true });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las Ventas' });
  }
});


//Obtener Ventas basado en si están terminadas o no:

router.get('/ventas/terminadas', async (req, res) => {
  try {
    const ventas = await Venta.find({ estaTerminada: true });
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las Ventas' });
  }
});


//Obtener el total de ventas:

router.get('/ventas/total', async (req, res) => {
  try {
    const totalVentas = await Venta.countDocuments();
    res.json(totalVentas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el total de Ventas' });
  }
});


// Obtener ventas en un rango de fechas:

router.get('/ventas/rango', async (req, res) => {
  try {
    const { fechaInicio, fechaFin } = req.query;

    if(!fechaInicio || !fechaFin) {
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
    res.status(500).json({ error: 'Error al obtener las Ventas' });
  }
});

module.exports = router;
