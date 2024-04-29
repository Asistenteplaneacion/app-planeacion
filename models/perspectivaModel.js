const mongoose = require('mongoose');

const perspectivaSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    megas: {
        type: mongoose.Schema.Types.ObjectId, ref: 'megas',
        required: true
    }
},
{   
    timestamps: true,      //una propiedad para que se coloque la fecha
    versionKey: false
}     
);

const Perspectiva = mongoose.model('perspectiva', perspectivaSchema);


// Datos de ejemplo para las Perspectivas del BSC
const perspectivasData = [
    {

        nombre: 'Financiera',
        megas:
            [{
            nombre: [{}] }]},

    {nombre: 'Procesos Internos',
    megas: 
        {
            nombre: 'Mega 1', 
            nombre: 'Mega 3',
            nombre: 'Mega 4'
        }},

    {nombre: 'Aprendizaje y Crecimiento',
    megas: 
        {
            nombre: 'Mega 1', 
            nombre: 'Mega 3'
        }},

    {nombre: 'Cliente',
    megas: 
        {
            nombre: 'Mega 1'

        }},

    {nombre: 'Responsabilidad Social',
    megas: 
        {
            nombre: 'Mega 1'
        },
    }];



// Insertar los objetos de las Perspectivas en la base de datos
Perspectiva.insertMany(perspectivasData)
    .then(() => console.log('Perspectivas insertadas correctamente'))
    .catch(error => console.error('Error al insertar Perspectivas:', error));

console.log({perspectivasData})


module.exports = Perspectiva;
