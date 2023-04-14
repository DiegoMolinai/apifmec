const mongoose = require("mongoose");

const vehiculoSchema = mongoose.Schema({
    idCambio:{
        type:Number,
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
const vehiculo = mongoose.model('Vehiculo', vehiculoSchema);
// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API 
module.exports = vehiculo;