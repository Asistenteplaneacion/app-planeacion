const mongoose = require('mongoose');
const { Schema } = mongoose;

const periodoEjecucionSchema = mongoose.Schema({
    periodo: { type: String, enum: ['I Periodo', 'II Periodo', 'I y II Periodo'] },
    actividad: { type: mongoose.Schema.Types.ObjectId, ref: 'Actividad' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);

const PeriodoEjecucion = mongoose.model('PeriodoEjecucion', periodoEjecucionSchema);

module.exports = PeriodoEjecucion;
