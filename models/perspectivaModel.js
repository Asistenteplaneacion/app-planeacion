const mongoose = require('mongoose');

const perspectivaSchema = mongoose.Schema({
    nombre: String,
    mega: { type: mongoose.Schema.Types.ObjectId, ref: 'Megas' }
},
{timestamps: true}     //una propiedad para que se coloque la fecha
);

const Perspectiva = mongoose.model('Perspectiva', perspectivaSchema);


// Datos de ejemplo para las Perspectivas del BSC
const perspectivasData = [
    { nombre: 'Financiera' },
    { nombre: 'Procesos Internos' },
    { nombre: 'Aprendizaje y Crecimiento' },
    { nombre: 'Cliente' },
    { nombre: 'Responsabilidad Social' }
];

// Insertar los objetos de las Perspectivas en la base de datos
Perspectiva.insertMany(perspectivasData)
    .then(() => console.log('Perspectivas insertadas correctamente'))
    .catch(error => console.error('Error al insertar Perspectivas:', error));


module.exports = Perspectiva;
