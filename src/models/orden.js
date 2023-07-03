const mongoose = require("mongoose");

const ordenSchema = mongoose.Schema({
    idOrden: {
      type: Number,
      required: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
    // Agregación recomendada: Campos de análisis
    totalOrdenes: { type: Number, default: 0 },
  });

// Se define una variable para poder ser utilizada 
// en caso de ser un atributo en otro modelo
const orden = mongoose.model('Orden', ordenSchema);
// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API 
module.exports = orden;