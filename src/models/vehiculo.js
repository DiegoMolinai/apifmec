const mongoose = require('mongoose');

const VehiculoSchema = new mongoose.Schema({
  idVehiculo: { type: String, required: true, unique: true },
  marcaVehiculo: { type: String,  required: true },
  modeloVehiculo: { type: String, required: true },
  cilindradaVehiculo: { type: Number, required: true },
  anioVehiculo: {  type: Number, required: true },
  tipoVehiculo: { type: [String],  required: true }
});

const Vehiculo = mongoose.model('Vehiculo', VehiculoSchema);

module.exports = Vehiculo;
