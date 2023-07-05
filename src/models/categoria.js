const mongoose = require("mongoose");

const categoriaSchema = mongoose.Schema({
    idCategoria: {
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    productos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Producto'
    }],
    // Agregación recomendada: Campos de análisis
    totalProductos: { type: Number, default: 0 },
  });
// Se define una variable para poder ser utilizada 
// en caso de ser un atributo en otro modelo
const categoria = mongoose.model('Categoria', categoriaSchema);
// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API
module.exports = categoria;
