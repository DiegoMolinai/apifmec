const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    idCambio: { type: Number, required: true, unique: true },
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true },
    cambio: { type: String, required: true },
    productos: [
      {
        nombre: { type: String, required: true },
        precio: { type: Number, required: true },
        tipo: { type: String, required: true },
        fecha: { type: Date, required: true },
        cantidad: { type: Date, required: true },
        categoria: [
          {
            idCategoria: { type: Number, required: true },
            nombre: { type: String, required: true },
            // Agregación recomendada: Campos de análisis
            totalProductos: { type: Number, default: 0 },
          },
        ],
        ventasTotales: { type: Number, default: 0 },
        valorTotalVentas: { type: Number, default: 0 },
      },
    ],
    precio: { type: Number, required: true },
    // Agregación recomendada: Campos de análisis
    ventasTotales: { type: Number, default: 0 },
    valorTotalVentas: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Servicio = mongoose.model("Servicio", servicioSchema);

module.exports = Servicio;
