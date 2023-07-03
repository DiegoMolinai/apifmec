const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  tipo: { type: String, required: true },
  fecha: { type: Date, required: true },
  cantidad: { type: Date, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  // Agregación recomendada: Campos de análisis
  ventasTotales: { type: Number, default: 0 },
  valorTotalVentas: { type: Number, default: 0 },
});

const producto = mongoose.model('Producto', productoSchema);

module.exports = producto;
