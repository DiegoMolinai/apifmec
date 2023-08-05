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
        producto: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Producto",
          required: true,
        },
        cantidad: { type: Number, required: true },
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
