const mongoose = require('mongoose');

const ObjetivoEstrategicoSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    eje: { type: Object, ref: 'Eje' }
},
{   
    timestamps: true,      
    versionKey: false
}        
);


const ObjetivoEstrategico = mongoose.model('Objetivo', ObjetivoEstrategicoSchema);


// Datos de ejemplo para los Objetivos Estratégicos
const objetivosData = 
    { 
        nombre: 'Desarrollo Institucional',
        eje: 
            {
                nombre: 'valor'
            }
};
    

// Insertar los objetos de los Objetivos Estratégicos en la base de datos
// ObjetivoEstrategico.insertMany(objetivosData)
//     .then(() => console.log('Objetivos Estratégicos insertados correctamente'))
//     .catch(error => console.error('Error al insertar Objetivos Estratégicos:', error));


module.exports = ObjetivoEstrategico;
