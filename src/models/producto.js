const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    tipo:{
        type:String,
        required:true
    }
});

// Se define una variable para poder ser utilizada 
// en caso de ser un atributo en otro modelo

const producto = mongoose.model('Producto', productoSchema); 

// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API 

module.exports =producto;