const mongoose = require('mongoose');

const ejeSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    perspectiva: { type: Object, ref: 'perspectiva' }
},
{   
    timestamps: true,      //una propiedad para que se coloque la fecha
    versionKey: false
}                        //una propiedad para que se coloque la fecha
);

const Eje = mongoose.model('eje', ejeSchema);



// Datos de ejemplo para los Ejes Estratégicos
const ejesData = 
    { 
        nombre: 'Transformación y el Salto Digital',
        perspectiva: 
            {
                nombre: 'Procesos Internos',
                nombre: 'Aprendizaje y Crecimiento',
            }   
    };



// Insertar los objetos de los Ejes Estratégicos en la base de datos
// Eje.insertMany(ejesData)
//     .then(() => console.log('Ejes Estratégicos insertados correctamente'))
//     .catch(error => console.error('Error al insertar Ejes Estratégicos:', error));


module.exports = Eje;
