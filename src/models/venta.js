const mongoose = require("mongoose");

const VentaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idVentas: { type: Number, unique: true },
    fechaCreacion: Date,
    estaTerminada: Boolean,
    estaPagada: Boolean,
    productos: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        nombre: String,
        precio: Number,
        tipo: String,
        fecha: Date,
        // Agregación recomendada: Campos de análisis
        cantidadVendida: { type: Number, default: 0 },
        valorTotalVentas: { type: Number, default: 0 },
      },
    ],
    servicios: [
      {
        _id: mongoose.Schema.Types.ObjectId,
        name: String,
        idCambio: String,
        tipo: String,
        descripcion: String,
        productos: [mongoose.Schema.Types.ObjectId],
        precio: Number,
      },
    ],
  });
module.exports = mongoose.model("Venta", VentaSchema);
