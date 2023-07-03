const express = require('express');
const router = express.Router();
const Servicio = require('../models/servicio');

// Listar todos los servicios
router.get('/servicios', async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los servicios' });
  }
});


// Obtener un servicio por su ID
router.get('/servicios/:id', async (req, res) => {
  try {
    const servicio = await Servicio.findById(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el servicio' });
  }
});

// Crear un nuevo servicio
router.patch('/servicios', async (req, res) => {
  try {
    const servicio = new Servicio(req.body);
    await servicio.save();
    res.status(201).json(servicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el servicio' });
  }
});

// Actualizar un servicio
router.put('/servicios/:id', async (req, res) => {
  try {
    const servicio = await Servicio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.json(servicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el servicio' });
  }
});

// Eliminar un servicio
router.delete('/servicios/:id', async (req, res) => {
  try {
    const servicio = await Servicio.findByIdAndRemove(req.params.id);
    if (!servicio) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.json({ message: 'Servicio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el servicio' });
  }
});

module.exports = router;
