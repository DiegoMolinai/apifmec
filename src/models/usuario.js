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
  },
  vendedor:{ type: String, enum: ['vendedor 1', 'vendedor 2', 'vendedor 3'], default:'vendedor 1'}
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
