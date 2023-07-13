const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  fecha: { type: Date, required: true },
  cantidad: { type: Date, required: true },
  categoria: [
    {    
      idCategoria: {
        type: Number,
        required: true,
      },
      nombre: {
        type: String,
        required: true,
      },
      // Agregación recomendada: Campos de análisis
      totalProductos: { type: Number, default: 0 },
    },
  ],
  // Agregación recomendada: Campos de análisis
  ventasTotales: { type: Number, default: 0 },
  valorTotalVentas: { type: Number, default: 0 },
 
});

const producto = mongoose.model('Producto', productoSchema);

module.exports = producto;
