const mongoose = require("mongoose");

const categoriaSchema = mongoose.Schema({
    idCategoria: { type: Number, required: true },
    nombre: { type: String, required: true },
    // Agregación recomendada: Campos de análisis
    totalProductos: { type: Number, default: 0 },
  });

const categoria = mongoose.model('Categoria', categoriaSchema);
// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API
module.exports = categoria;
