const mongoose = require('mongoose');
const { Schema } = mongoose;

const componenteSchema = mongoose.Schema({
    nombre: String,
    codigoComponente: { type: mongoose.Schema.Types.ObjectId, ref: 'CodigoComponente' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);

const Componente = mongoose.model('Componente', componenteSchema);

module.exports = Componente;
