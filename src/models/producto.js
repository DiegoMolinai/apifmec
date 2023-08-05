const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  fecha: { type: Date, required: true },
  cantidad: { type: Number, required: true },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
    required: true,
  },
  // Agregación recomendada: Campos de análisis
  ventasTotales: { type: Number, default: 0 },
  valorTotalVentas: { type: Number, default: 0 },
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
