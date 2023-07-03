const express = require('express');
const router = express.Router();
const Distribuidor = require('../models/distribuidor');

// Ruta para obtener todos los distribuidores
router.get('/distribuidor', async (req, res) => {
  try {
    const distribuidores = await Distribuidor.find();
    res.json(distribuidores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para obtener un distribuidor por ID
router.get('/distribuidor/:id', getDistribuidor, (req, res) => {
  res.json(res.distribuidor);
});

// Ruta para crear un nuevo distribuidor
router.post('/distribuidor/', async (req, res) => {
  const distribuidor = new Distribuidor({
    idDistribuidor: req.body.idDistribuidor,
    nombre: req.body.nombre,
    totalVentas: req.body.totalVentas
  });

  try {
    const nuevoDistribuidor = await distribuidor.save();
    res.status(201).json(nuevoDistribuidor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para actualizar un distribuidor
router.patch('/distribuidor/:id', getDistribuidor, async (req, res) => {
  if (req.body.idDistribuidor != null) {
    res.distribuidor.idDistribuidor = req.body.idDistribuidor;
  }
  if (req.body.nombre != null) {
    res.distribuidor.nombre = req.body.nombre;
  }
  if (req.body.totalVentas != null) {
    res.distribuidor.totalVentas = req.body.totalVentas;
  }

  try {
    const distribuidorActualizado = await res.distribuidor.save();
    res.json(distribuidorActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Ruta para eliminar un distribuidor
router.delete('/distribuidor/:id', getDistribuidor, async (req, res) => {
  try {
    await res.distribuidor.remove();
    res.json({ message: 'Distribuidor eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware para obtener un distribuidor por ID
async function getDistribuidor(req, res, next) {
  let distribuidor;
  try {
    distribuidor = await Distribuidor.findById(req.params.id);
    if (distribuidor == null) {
      return res.status(404).json({ message: 'Distribuidor no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.distribuidor = distribuidor;
  next();
}

module.exports = router;
