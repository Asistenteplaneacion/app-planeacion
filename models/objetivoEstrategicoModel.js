const mongoose = require('mongoose');

const ObjetivoEstrategicoSchema = mongoose.Schema({
    nombre: String,
    eje: { type: mongoose.Schema.Types.ObjectId, ref: 'Eje' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);


const ObjetivoEstrategico = mongoose.model('Objetivo', ObjetivoEstrategicoSchema);


const mongoose = require('mongoose');
const ObjetivoEstrategico = require('./ruta_de_tu_modelo_ObjetivoEstrategico'); // Asegúrate de ajustar la ruta según la ubicación de tu modelo ObjetivoEstrategico

// Datos de ejemplo para los Objetivos Estratégicos
const objetivosData = [
    { nombre: 'Desarrollo Institucional' },
    { nombre: 'Eficiencia Administrativa' },
    { nombre: 'Calidad de Vida' },
    { nombre: 'Articulación e Impacto Social' },
    { nombre: 'Calidad Académica' }
];

// Insertar los objetos de los Objetivos Estratégicos en la base de datos
ObjetivoEstrategico.insertMany(objetivosData)
    .then(() => console.log('Objetivos Estratégicos insertados correctamente'))
    .catch(error => console.error('Error al insertar Objetivos Estratégicos:', error));


module.exports = ObjetivoEstrategico;
