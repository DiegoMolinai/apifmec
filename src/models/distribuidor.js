const mongoose = require("mongoose");

const distribuidorSchema = mongoose.Schema({
    idDistribuidor: {
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    // Agregación recomendada: Campos de análisis
    totalVentas: { type: Number, default: 0 },
  });

// Se define una variable para poder ser utilizada 
// en caso de ser un atributo en otro modelo
const distribuidor =mongoose.model('Distribuidor', distribuidorSchema);
// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API 
module.exports = distribuidor;
