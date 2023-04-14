const express = require("express");

const productoSchema = require("../models/producto");

const router = express.Router();

// Listar Productos

router.get("/productos", (req, res) => {
  productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Buscar Producto

router.get("/productos/:id", (req, res) => {
  const {id} = req.params;
  productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}); 


// Crear Producto

router.post("/productos", (req, res) => {
  productoSchema
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar Producto

router.put("/productos/:id", (req, res) => {
  const {id} = req.params;
  const {nombre,precio,tipo} = req.body;
  productoSchema
    .updateOne({_id: id},{ $set: { nombre, precio, tipo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar Producto

router.delete("/productos/:id", (req, res) => {
  const {id} = req.params;
  productoSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});




module.exports = router;
