const mongoose = require('mongoose');

const saveDataSchema = mongoose.Schema({
    objetivo: {type: String, required: true},
    politica: {type: String, required: true},

    
},
{
    timestamps: true,   
    versionKey: false
}
);


const saveData = mongoose.model('SaveData', saveDataSchema);


// Datos de ejemplo para los Objetivos Estratégicos
// const objetivosData = [
//     { nombre: 'Desarrollo Institucional'},
//     { nombre: 'Eficiencia Administrativa'},
//     { nombre: 'Calidad de Vida'},
//     { nombre: 'Articulación e Impacto Social'},
//     { nombre: 'Calidad Académica'},
// ];
    

// Insertar los objetos de los Objetivos Estratégicos en la base de datos

// ObjetivoEstrategico.insertMany(objetivosData)
//     .then(() => console.log('Objetivos Estratégicos insertados correctamente'))
//     .catch(error => console.error('Error al insertar Objetivos Estratégicos:', error));


module.exports = saveData;
