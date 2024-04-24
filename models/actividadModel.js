const mongoose = require('mongoose');

const actividadSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    periodoEjecucion: { type: Object}
    
},
{timestamps: true, versionKey: false}      //una propiedad para que se coloque la fecha
)

const Actividad = mongoose.model('Actividad', actividadSchema);

// Lista de macroactividades de componente}
const actividadData = {
    nombre: 'Identificar los recursos y/o servicios bibliográficos necesarios por programa académico.',
    periodoEjecucion: {
        fecha: 'I y II Periodo'
    }
};

// // Insertar los objetos de los Proyectos en la base de datos
// actividad.insertMany(actividadData)
//     .then(() => console.log('actividad insertados correctamente'))
//     .catch(error => console.error('Error al insertar actividad:', error));

module.exports = Actividad;

