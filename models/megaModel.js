const mongoose = require('mongoose');

const megaSchema = mongoose.Schema({
    nombre: String,
},
{timestamps: true}
);

// Crear los objetos Mega con los nombres específicos
const Megas = mongoose.model('megas', megaSchema);

const megasData = [
    { nombre: 'Mega 1: Consolidación de las Funciones Sustantivas y las Labores que le tributan, en el marco de su naturaleza e identidad institucional' },
    { nombre: 'Mega 2: Educación para el Trabajo y el Desarrollo Humano' },
    { nombre: 'Mega 3: Énfasis en el Bilingüismo, la Internacionalización e Interculturalidad' },
    { nombre: 'Mega 4: Creación de Programas de Pregrado Técnico Profesional' },
];

// Insertar los objetos Mega en la base de datos
Megas.insertMany(megasData)
    .then(() => console.log('Megas insertadas correctamente'))
    .catch(error => console.error('Error al insertar Megas:', error));

module.exports = Megas;

