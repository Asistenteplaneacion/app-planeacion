const mongoose = require('mongoose');

const macroactividadSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    componente: { type: mongoose.Schema.Types.ObjectId, ref: 'Componente'},
    deleted: { type: Boolean, default: false},

},
{timestamps: true, versionKey: false}    //una propiedad para que se coloque la fecha
);

const Macroactividad = mongoose.model('Macroactividad', macroactividadSchema);


// Lista de macroactividades de componente
// const macroactividadData = {
//     nombre: 'Coordinación de Educación Continua',
// };

// Insertar los objetos de los Proyectos en la base de datos
// Macroactividad.insertMany(macroactividadData)
//     .then(() => console.log('Proyectos insertados correctamente'))
//     .catch(error => console.error('Error al insertar Proyectos:', error));

module.exports = Macroactividad;
