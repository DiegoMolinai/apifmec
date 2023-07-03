const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  contrasenia: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  rol: {
    type: String,
    enum: ['admin', 'user', 'trabajador'],
    default: 'user'
  }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
