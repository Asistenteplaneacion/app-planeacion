const mongoose = require('mongoose');

const PeriodoSchema = mongoose.Schema({
    periodoEjecucion: {type: String, required: true},

},
{timestamps: true, versionKey: false}      //una propiedad para que se coloque la fecha
)

const Periodo = mongoose.model('Periodo', PeriodoSchema);

// Lista de macroactividades de componente}
const periodoData = [
    { periodoEjecucion: 'I Periodo'  },
    { periodoEjecucion: 'I y II Periodo'  },
    { periodoEjecucion: 'II Periodo'  },
]


Periodo.insertMany(periodoData)
    .then(() => console.log('Periodos insertados correctamente'))
    .catch(error => console.error('Error al insertar Periodos:', error));

module.exports = Periodo;

