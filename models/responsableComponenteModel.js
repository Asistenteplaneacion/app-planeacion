const mongoose = require('mongoose');

const responsableComponenteSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    componente: { type: Object, ref: 'Componente' }
},
{timestamps: true, versionKey: false}     //una propiedad para que se coloque la fecha
);

const ResponsableComponente = mongoose.model('ResponsableComponente', responsableComponenteSchema);


// Lista de responsables de componente
const responsablesData = {
    nombre: 'Coordinación de Educación Continua',
};

// Insertar los objetos de los Proyectos en la base de datos
// ResponsableComponente.insertMany(responsablesData)
//     .then(() => console.log('Proyectos insertados correctamente'))
//     .catch(error => console.error('Error al insertar Proyectos:', error));


    // "Coordinación de Educación Continua",
    // "Dirección de Biblioteca y Gestión Documental",
    // "Dirección de Contabilidad",
    // "Dirección de Desarrollo Humano",
    // "Dirección de Mercadeo y Ventas",
    // "Dirección de Planeación",
    // "Dirección de Publicidad y Comunicaciones",
    // "Dirección de Recursos Físicos e Infraestructura",
    // "Dirección de Recursos Humanos",
    // "Dirección de Registro y Control",
    // "Dirección de Sistemas y Multimedios",
    // "Dirección del Sistema Interno de Aseguramiento de la Calidad",
    // "Gestor de Internacionalización e Interculturalidad",
    // "Gestor del Sistema de Gestión de la Calidad",
    // "Jefe de Unidad de Investigación",
    // "Jefe de Unidad de Pertinencia e Impacto Social",
    // "Líder de Innovación y Emprendimiento",
    // "Egresados",
    // "Secretaria General",
    // "Vicerrectoría Académica",
    // "Vicerrectoría Administrativa"

module.exports = ResponsableComponente;
