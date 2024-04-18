const mongoose = require('mongoose');
const { Schema } = mongoose;

const actividadSchema = mongoose.Schema({
    nombre: String,
    macroactividad: { type: mongoose.Schema.Types.ObjectId, ref: 'Macroactividad' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
)

const Actividad = mongoose.model('Actividad', actividadSchema);

module.exports = Actividad;

