// const mongoose = require('mongoose');
// const { Schema } = mongoose;

// const proyectoSchema = mongoose.Schema({
//     nombre: String,
//     programa: { type: mongoose.Schema.Types.ObjectId, ref: 'Programa' }
// },
// {timestamps: true}      //una propiedad para que se coloque la fecha
// );

// const Proyecto = mongoose.model('Proyecto', proyectoSchema);

// module.exports = Proyecto;

const mongoose = require('mongoose');


// Esquema del Proyecto
const proyectoSchema = mongoose.Schema({
    nombre: String,
    codigo: String,
    programa: { type: mongoose.Schema.Types.ObjectId, ref: 'Programa' }
},
{timestamps: true}
);

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

// Datos de ejemplo para los Proyectos
const proyectosData = [
    { nombre: 'Ampliación de la Oferta', codigo: 'F.DI-4.7.2', programa: 'F.DI-4.7. Ampliación de la Cobertura y Diversificación de la Oferta' },
    { nombre: 'Orientado al Crecimiento y Posicionamiento Institucional y de los Programas', codigo: 'F.DI-4.7.3', programa: 'F.DI-4.7. Ampliación de la Cobertura y Diversificación de la Oferta' },
    { nombre: 'Fortalecimiento del Comportamiento Financiero a través de la Ampliación de la Cobertura y el Crecimiento de la Población Estudiantil', codigo: 'F.EA-5.14.1', programa: 'F.EA-5.14. Crecimiento y Sostenibilidad Institucional para garantizar el Servicio Educativo con Calidad, Pertinencia e Impacto Social' },
    // Añade aquí los demás proyectos con sus códigos y programas correspondientes
];

// Insertar los objetos de los Proyectos en la base de datos
Proyecto.insertMany(proyectosData)
    .then(() => console.log('Proyectos insertados correctamente'))
    .catch(error => console.error('Error al insertar Proyectos:', error));

module.exports = Proyecto;



