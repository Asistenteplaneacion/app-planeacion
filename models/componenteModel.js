const mongoose = require('mongoose');

const ComponenteSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    responsable: {type: Object, ref: 'Responsable'},
    proyecto: { type: Object, ref: 'Proyecto' }
},
{timestamps: true, versionKey: false}      //una propiedad para que se coloque la fecha
);

const Componente = mongoose.model('Componente', ComponenteSchema);


// Datos de los Componentes
const componenteData = 
    {
        nombre: 'PI.EA-2.11.1 Adquisición y/o Renovación de los Medios Educativos y de Gestión Administrativa',
        responsable: {
            nombre: 'Dirección de Biblioteca y Gestión Documental'
        }
        programa: {
            nombre: 'valorPrograma'
        }

};

// Insertar los objetos de los Proyectos en la base de datos
Componente.insertMany(componenteData)
    .then(() => console.log('Proyectos insertados correctamente'))
    .catch(error => console.error('Error al insertar Proyectos:', error));

    
module.exports = Componente;
