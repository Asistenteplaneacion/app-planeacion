const mongoose = require('mongoose');
const { Schema } = mongoose;

const macroactividadSchema = mongoose.Schema({
    nombre: String,
    responsableComponente: { type: mongoose.Schema.Types.ObjectId, ref: 'ResponsableComponente' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);

const Macroactividad = mongoose.model('Macroactividad', macroactividadSchema);

module.exports = Macroactividad;
