const mongoose = require("mongoose");

const cambioSchema = mongoose.Schema({
  idCambio: { type: Number, required: true},
  fecha: {type: Date, default: Date.now, required: true},
  tipo: [{ type: String, enum: [ "Cambio de aceite", "Cambio de filtro de aire",
        "Cambio de filtro de aceite", "Cambio de pastillas"], required: true}],
  precio: { type: Number, required: true },
  kilometraje: { type: Number, required: true },
  descripcion: { type: String, required: true },
  proveedor: { type: String, required: true },
  tiempoEstimado: { type: String, required: true },
  imagen: { type: String },
  // Agregación recomendada: Campos de análisis
  totalCambios: { type: Number, default: 0 },
});

const cambio = mongoose.model("Cambio", cambioSchema);

module.exports = cambio;
