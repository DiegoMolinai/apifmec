const express = require('express');
const router = express.Router();
const Cambio = require('../models/cambio');

// Obtener todos los cambios
router.get('/cambio', async (req, res) => {
  try {
    const cambios = await Cambio.find();
    res.json(cambios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un cambio por su ID
router.get('/cambio/:id', getCambio, (req, res) => {
  res.json(res.cambio);
});

// Crear un nuevo cambio
router.post('/cambio', async (req, res) => {
  const cambio = new Cambio({
    idCambio: req.body.idCambio,
    fecha: req.body.fecha,
    tipo: req.body.tipo,
    totalCambios: req.body.totalCambios
  });

  try {
    const nuevoCambio = await cambio.save();
    res.status(201).json(nuevoCambio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un cambio
router.patch('/cambio/:id', getCambio, async (req, res) => {
  if (req.body.idCambio != null) {
    res.cambio.idCambio = req.body.idCambio;
  }
  if (req.body.fecha != null) {
    res.cambio.fecha = req.body.fecha;
  }
  if (req.body.tipo != null) {
    res.cambio.tipo = req.body.tipo;
  }
  if (req.body.totalCambios != null) {
    res.cambio.totalCambios = req.body.totalCambios;
  }

  try {
    const cambioActualizado = await res.cambio.save();
    res.json(cambioActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar un cambio
router.delete('/cambio/:id', getCambio, async (req, res) => {
  try {
    await res.cambio.remove();
    res.json({ message: 'Cambio eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware para obtener un cambio por su ID
async function getCambio(req, res, next) {
  let cambio;
  try {
    cambio = await Cambio.findById(req.params.id);
    if (cambio == null) {
      return res.status(404).json({ message: 'Cambio no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.cambio = cambio;
  next();
}

module.exports = router;
