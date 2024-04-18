const mongoose = require('mongoose');
const { Schema } = mongoose;

const ejeSchema = mongoose.Schema({
    nombre: String,
    perspectiva: { type: mongoose.Schema.Types.ObjectId, ref: 'Perspectiva' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);

const Eje = mongoose.model('Eje', ejeSchema);



// Datos de ejemplo para los Ejes Estratégicos
const ejesData = [
    { nombre: 'Transformación y el Salto Digital' },
    { nombre: 'Desarrollo Sostenible y Responsabilidad Social' },
    { nombre: 'Aseguramiento Institucional de la Calidad' },
    { nombre: 'Transparencia y Buen Gobierno' },
    { nombre: 'Desarrollo Humano y Bienestar' }
];

// Insertar los objetos de los Ejes Estratégicos en la base de datos
Eje.insertMany(ejesData)
    .then(() => console.log('Ejes Estratégicos insertados correctamente'))
    .catch(error => console.error('Error al insertar Ejes Estratégicos:', error));


module.exports = Eje;
