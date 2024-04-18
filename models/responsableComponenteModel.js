const mongoose = require('mongoose');

const responsableComponenteSchema = mongoose.Schema({
    nombre: String,
    componente: { type: mongoose.Schema.Types.ObjectId, ref: 'Componente' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);

const ResponsableComponente = mongoose.model('ResponsableComponente', responsableComponenteSchema);


// Lista de responsables de componente
const responsables = [
    "Coordinación de Educación Continua",
    "Dirección de Biblioteca y Gestión Documental",
    "Dirección de Contabilidad",
    "Dirección de Desarrollo Humano",
    "Dirección de Mercadeo y Ventas",
    "Dirección de Planeación",
    "Dirección de Publicidad y Comunicaciones",
    "Dirección de Recursos Físicos e Infraestructura",
    "Dirección de Recursos Humanos",
    "Dirección de Registro y Control",
    "Dirección de Sistemas y Multimedios",
    "Dirección del Sistema Interno de Aseguramiento de la Calidad",
    "Gestor de Internacionalización e Interculturalidad",
    "Gestor del Sistema de Gestión de la Calidad",
    "Jefe de Unidad de Investigación",
    "Jefe de Unidad de Pertinencia e Impacto Social",
    "Líder de Innovación y Emprendimiento",
    "Egresados",
    "Secretaria General",
    "Vicerrectoría Académica",
    "Vicerrectoría Administrativa"
];

// Función para agregar responsables de componente a la base de datos
async function agregarResponsables() {
    try {
        // Iterar sobre la lista de responsables y guardar cada uno en la base de datos
        for (const responsable of responsables) {
            await ResponsableComponente.create({ nombre: responsable });
            console.log(`Responsable ${responsable} agregado correctamente.`);
        }
        console.log("Todos los responsables de componente han sido agregados correctamente.");
    } catch (error) {
        console.error("Error al agregar responsables de componente:", error);
    } finally {
        // Cerrar la conexión a la base de datos al finalizar
        mongoose.disconnect();
    }
}


module.exports = ResponsableComponente;
