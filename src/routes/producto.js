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
  const { id } = req.params;
  productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Crear Producto
router.post("/productos", (req, res) => {
  const producto = new productoSchema(req.body);
  producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar Producto
router.put("/productos/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, precio, tipo, fecha } = req.body;
  productoSchema
    .updateOne({ _id: id }, { nombre, precio, tipo, fecha })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar Producto
router.delete("/productos/:id", (req, res) => {
  const { id } = req.params;
  productoSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
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
