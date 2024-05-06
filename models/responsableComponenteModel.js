const mongoose = require('mongoose');

const responsableComponenteSchema = mongoose.Schema({
    area: {type: String, required: true},
},
{timestamps: true, versionKey: false}  //una propiedad para que se coloque la fecha
);

const ResponsableComponente = mongoose.model('ResponsableComponente', responsableComponenteSchema);


// Lista de responsables de componente
const responsablesData =
[
    { area: "Coordinación de Educación Continua"},
    { area: "Dirección de Biblioteca y Gestión Documental"},
    { area: "Dirección de Contabilidad"},
    { area: "Dirección de Desarrollo Humano"},
    { area: "Dirección de Mercadeo y Ventas"},
    { area: "Dirección de Planeación"},
    { area: "Dirección de Publicidad y Comunicaciones"},
    { area: "Dirección de Recursos Físicos e Infraestructura"},
    { area: "Dirección de Recursos Humanos"},
    { area: "Dirección de Registro y Control"},
    { area: "Dirección de Sistemas y Multimedios"},
    { area: "Dirección del Sistema Interno de Aseguramiento de la Calidad"},
    { area: "Gestor de Internacionalización e Interculturalidad"},
    { area: "Gestor del Sistema de Gestión de la Calidad"},
    { area: "Jefe de Unidad de Investigación"},
    { area: "Jefe de Unidad de Pertinencia e Impacto Social"},
    { area: "Líder de Innovación y Emprendimiento"},
    { area: "Egresados"},
    { area: "Secretaria General"},
    { area: "Vicerrectoría Académica"},
    { area: "Vicerrectoría Administrativa"}
];


// Insertar los objetos de los Proyectos en la base de datos
ResponsableComponente.insertMany(responsablesData)
    .then(() => console.log('Responsables componentes insertados correctamente'))
    .catch(error => console.error('Error al insertar responsables componentes:', error));


module.exports = ResponsableComponente;
