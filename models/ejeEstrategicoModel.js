const mongoose = require('mongoose');
const { Schema } = mongoose;

const ejeSchema = mongoose.Schema({
    nombre: String,
    perspectiva: [{ type: mongoose.Schema.Types.ObjectId, ref: 'perspectiva' }]
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);

const Eje = mongoose.model('eje', ejeSchema);



// Datos de ejemplo para los Ejes Estratégicos
const ejesData = [
    { 
        perspectiva: 
            [
                new mongoose.Types.ObjectId('6622c32010b048ff69bb38b6'),
                new mongoose.Types.ObjectId('6622c32010b048ff69bb38b9'),
                new mongoose.Types.ObjectId('6622c32010b048ff69bb38b7'),
            ],

        nombre: 'Transformación y el Salto Digital' 
    },

    { 
        nombre: 'Desarrollo Sostenible y Responsabilidad Social'
    },
    { 
        nombre: 'Aseguramiento Institucional de la Calidad'
    },
    { 
        nombre: 'Transparencia y Buen Gobierno'
    },
    { 
        nombre: 'Desarrollo Humano y Bienestar'
    }
];

// Insertar los objetos de los Ejes Estratégicos en la base de datos
Eje.insertMany(ejesData)
    .then(() => console.log('Ejes Estratégicos insertados correctamente'))
    .catch(error => console.error('Error al insertar Ejes Estratégicos:', error));


module.exports = Eje;
