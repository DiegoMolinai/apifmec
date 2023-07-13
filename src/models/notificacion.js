const mongoose = require("mongoose");

const notificacionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // Agrega esta línea para definir el tipo de dato para el campo _id
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
  fechaCreacion: { type: Date, default: Date.now },
  vistas: { type: Number, default: 0 },
  terminada: {
    type: Boolean,
    default: false,
    required: true,
  },
}, { timestamps: true });

const notificaciones = mongoose.model("Notificaciones", notificacionSchema);
module.exports = notificaciones;
