const mongoose = require("mongoose");

const notificacionSchema = mongoose.Schema({
  idNotificacion: {
    type: Number,
    required: true,
  },
  titulo: {
    type: String,
    default: "No Hay Titulo",
    required: true,
  },
  descripcion: {
    type: String,
    default: "No Hay Descripcion",
    required: true,
  },
    // Agregación recomendada: Campos de análisis
    fechaCreacion: { type: Date, default: Date.now },
    vistas: { type: Number, default: 0 },
},{timestamps:true});


// Se define una variable para poder ser utilizada
// en caso de ser un atributo en otro modelo
const notificaciones = mongoose.model("Notificaciones", notificacionSchema);
// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API
module.exports = notificaciones;
