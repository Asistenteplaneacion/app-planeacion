const mongoose = require('mongoose');
const { Schema } = mongoose;

const politicaSchema = mongoose.Schema({
    nombre: String,
    objetivo: { type: mongoose.Schema.Types.ObjectId, ref: 'Objetivo' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);

const Politica = mongoose.model('Politica', politicaSchema);


// Datos de ejemplo para las Políticas, organizados en orden
const politicasData = [
    '1. Cultura de Transparencia y Rendición de cuentas',
    '2. Calidad como Fundamento de la Pertinencia y el Impacto Social',
    '3. Desarrollo Humano, Construcción de Comunidad y Tejido Social',
    '4. Modernización y Tecnológica progresiva de los procesos administrativos y académicos',
    '5. Gestión Académica y Administrativa Social, Económica y Ambientalmente Responsable'
];

// Insertar los objetos de las Políticas en la base de datos
Politica.insertMany(politicasData.map(politica => ({ nombre: politica })))
    .then(() => console.log('Políticas insertadas correctamente'))
    .catch(error => console.error('Error al insertar Políticas:', error));


module.exports = Politica;
