const mongoose = require("mongoose");

const VentaSchema = new mongoose.Schema({
  idVentas: { type: Number, unique: true },
  fechaCreacion: Date,
  estaTerminada: Boolean,
  estaPagada: Boolean,
  vendedor:{
    type: String,
    enum: ['vendedor 1', 'vendedor 2', 'vendedor 3'],
    default: 'vendedor'
  },
  productos: [
    {
      nombre: { type: String, required: true },
      precio: { type: Number, required: true },
      tipo: { type: String, required: true },
      fecha: { type: Date, required: true },
      cantidad: { type: Date, required: true },
      categoria: [{    idCategoria: {
        type: Number,
        required: true,
      },
      nombre: {
        type: String,
        required: true,
      },
      // Agregación recomendada: Campos de análisis
      totalProductos: { type: Number, default: 0 },},],
      // Agregación recomendada: Campos de análisis
      ventasTotales: { type: Number, default: 0 },
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
      productos: [ {
        nombre: { type: String, required: true },
        precio: { type: Number, required: true },
        tipo: { type: String, required: true },
        fecha: { type: Date, required: true },
        cantidad: { type: Date, required: true },
        categoria: [{    idCategoria: {
          type: Number,
          required: true,
        },
        nombre: {
          type: String,
          required: true,
        },
        // Agregación recomendada: Campos de análisis
        totalProductos: { type: Number, default: 0 },},],
        // Agregación recomendada: Campos de análisis
        ventasTotales: { type: Number, default: 0 },
        valorTotalVentas: { type: Number, default: 0 },
      },],
      precio: Number,
      // Agregación recomendada: Campos de análisis
      cantidadVendida: { type: Number, default: 0 },
      valorTotalVentas: { type: Number, default: 0 },
    },
  ],
  vendedor: String
});

module.exports = mongoose.model("Venta", VentaSchema);
