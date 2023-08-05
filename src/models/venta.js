const mongoose = require("mongoose");

const VentaSchema = new mongoose.Schema({
  idVentas: { type: Number, unique: true },
  fechaCreacion: Date, estaTerminada: Boolean, estaPagada: Boolean,
  vendedor: { type: String, enum: ["vendedor 1", "vendedor 2", "vendedor 3"],
  default: "vendedor"},
  productos: [{ producto: { type: mongoose.Schema.Types.ObjectId,
    ref: "Producto", required: true, },
      cantidad: { type: Number, required: true }},],
  servicios: [{ servicio: { type: mongoose.Schema.Types.ObjectId,
    ref: "Servicio", required: true, },
      cantidad: { type: Number, required: true }},],
});

module.exports = mongoose.model("Venta", VentaSchema);
