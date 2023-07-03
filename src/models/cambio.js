const mongoose = require("mongoose");

const cambioSchema = mongoose.Schema({
    idCambio: {
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
      totalCambios: { type: Number, default: 0 },
    });

// Se define una variable para poder ser utilizada 
// en caso de ser un atributo en otro modelo
const cambio = mongoose.model('Cambio', cambioSchema);

// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API
module.exports = cambio;
