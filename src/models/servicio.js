const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    idCambio: { type: String, required: true, unique: true },
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true },
    productos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Producto" }],
    precio: { type: Number, required: true },
    // Agregación recomendada: Campos de análisis
    ventasTotales: { type: Number, default: 0 },
    valorTotalVentas: { type: Number, default: 0 },
  },
  { timestamps: true }
);
// Se define una variable para poder ser utilizada
// en caso de ser un atributo en otro modelo
const servicio = mongoose.model("Servicio", servicioSchema);
// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API
module.exports = servicio;
