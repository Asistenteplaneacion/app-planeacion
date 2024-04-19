const mongoose = require('mongoose');

const perspectivaSchema = mongoose.Schema({
    nombre: String,
    megas: {
        type: Array,
        default: []
    }
},
{   timestamps: true,      //una propiedad para que se coloque la fecha
    versionKey: false
}     
);

const Perspectiva = mongoose.model('perspectiva', perspectivaSchema);


// Datos de ejemplo para las Perspectivas del BSC
const perspectivasData = [
    { 
        megas:
            [
                'Mega 1: Consolidación de las Funciones Sustantivas y las Labores que le tributan, en el marco de su naturaleza e identidad institucional',
                'Mega 2: Educación para el Trabajo y el Desarrollo Humano',
                'Mega 4: Creación de Programas de Pregrado Técnico Profesional'
            ],
        nombre: 'Financiera'
    },

    { 
        megas:
            [
                'Mega 1: Consolidación de las Funciones Sustantivas y las Labores que le tributan, en el marco de su naturaleza e identidad institucional',
                'Mega 3: Énfasis en el Bilingüismo, la Internacionalización e Interculturalidad',
                'Mega 4: Creación de Programas de Pregrado Técnico Profesional'
            ],
            nombre: 'Procesos Internos'
    },

    { 
        megas: 
            [
                'Mega 1: Consolidación de las Funciones Sustantivas y las Labores que le tributan, en el marco de su naturaleza e identidad institucional',
                'Mega 3: Énfasis en el Bilingüismo, la Internacionalización e Interculturalidad', 
            ],
        nombre: 'Aprendizaje y Crecimiento'
    },

    { 
        megas: ['Mega 1: Consolidación de las Funciones Sustantivas y las Labores que le tributan, en el marco de su naturaleza e identidad institucional'],
        nombre: 'Cliente'
    },

    { 
        megas: ['Mega 1: Consolidación de las Funciones Sustantivas y las Labores que le tributan, en el marco de su naturaleza e identidad institucional'],
        nombre: 'Responsabilidad Social'
    }
];

// Insertar los objetos de las Perspectivas en la base de datos
Perspectiva.insertMany(perspectivasData)
    .then(() => console.log('Perspectivas insertadas correctamente'))
    .catch(error => console.error('Error al insertar Perspectivas:', error));


module.exports = Perspectiva;
