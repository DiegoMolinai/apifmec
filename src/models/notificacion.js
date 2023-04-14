const mongoose = require("mongoose");

const notificacionSchema = mongoose.Schema({
    idNotificacion:{
        type:Number,
        required:true
    },
    fecha:{
        type:Date,
        default:Date.now,
        required:true
    },
    titulo:{
        type:String,
        default:"No Hay Titulo",
        required:true
    },
    descripcion:{
        type:String,
        default:"No Hay Descripcion",
        required:true
    }
});

// Se define una variable para poder ser utilizada 
// en caso de ser un atributo en otro modelo
const notificacion = mongoose.model('Notificacion', notificacionSchema); 
// Y ahora se exporta para poder ser utilizado como base
// de una llamada a la API 
module.exports = notificacion;

