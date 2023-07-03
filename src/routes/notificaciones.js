const express = require("express");
const notificacionSchema = require("../models/notificacion");

const router = express.Router();

// Listar Notificacion
router.get("/notificaciones", (req, res) => {
  notificacionSchema
    .find().sort({ _id: -1 })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Buscar Notificacion
router.get("/notificaciones/:id", (req, res) => {
  const { id } = req.params;
  notificacionSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Crear Notificacion
router.post("/notificaciones", (req, res) => {
  const notificacion = new notificacionSchema(req.body);
  notificacion
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar Notificacion
router.put("/notificaciones/:id", (req, res) => {
  const { id } = req.params;
  const { idNotificacion, fecha, titulo,descripcion } = req.body;
  notificacionSchema
    .updateOne({ _id: id }, { idNotificacion, fecha, titulo,descripcion })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar Notificacion
router.delete("/notificaciones/:id", (req, res) => {
  const { id } = req.params;
  notificacionSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
