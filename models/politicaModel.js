const mongoose = require('mongoose');
const { Schema } = mongoose;

const politicaSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    objetivo: { type: Object, ref: 'Objetivo' }
},
{timestamps: true, versionKey: false}      //una propiedad para que se coloque la fecha
);

const Politica = mongoose.model('Politica', politicaSchema);


// Datos de ejemplo para las Políticas, organizados en orden
const politicasData = {
    nombre: '1. Cultura de Transparencia y Rendición de cuentas',
    objetivo: {
        nombre: "valorObjetivo"
    }
};
    
    


// Insertar los objetos de las Políticas en la base de datos
// Politica.insertMany(politicasData.map(politica => ({ nombre: politica })))
//     .then(() => console.log('Políticas insertadas correctamente'))
//     .catch(error => console.error('Error al insertar Políticas:', error));


module.exports = Politica;
