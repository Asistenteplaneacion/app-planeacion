const mongoose = require('mongoose');


// Esquema del Proyecto
const proyectoSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    
},
{timestamps: true, versionKey: false}     //una propiedad para que se coloque la fecha
);

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

// Datos de ejemplo para los Proyectos

const proyectosData = 
    [
        { nombre: "AC.AIS-1.27.1 Articulación de las Labores de Docencia, con el Sector Externo" },
        { nombre: "AC.AIS-1.27.2 Articulación de las labores de Investigación, Innovación y/o Creación con el Sector Externo" },
        { nombre: "AC.AIS-1.27.3 Articulación de las labores de Extensión y Proyección Social con el Sector Externo" },
        { nombre: "AC.CA-3.16.1 Cualificación docente en Pedagogía, Didáctica, Curriculo y Evaluación" },
        { nombre: "AC.CA-3.16.2 Cualificación Docentes Disciplinar" },
        { nombre: "AC.CA-3.16.3 Cualificación Docente en Bilinguismo" },
        { nombre: "AC.CV-1.22.1 Construcción de Comunidad Institucional" },
        { nombre: "AC.CV-1.22.2 Vinculación de los Grupos Familiares en la vida Institucional" },
        { nombre: "AC.CV-3.23.1 Fomento del Autocuidado, Salud Física y Mental" },
        { nombre: "AC.CV-3.23.2 Fomento de la Cultura y el Arte" },
        { nombre: "AC.CV-3.23.3 Fomento del Deporte y la Recreación" },
        { nombre: "AC.DI-3.1.1 Gestión de la Participación de los Órganos Colegiados en el Desarrollo Institucional" },
        { nombre: "AC.DI-3.1.2 Gestión de Comités de Apoyo a la Gestión en las diferentes dimensiones del Desarrollo Institucional" },
        { nombre: "AC.EA-1.8.1 Modelo de gestión del conocimiento y del Aprendizaje Organizacional" },
        { nombre: "AC.EA-1.8.2 Gestión de la Innovación en los Procesos Administrativos" },
        { nombre: "AC.EA-2.9.1 Seguimiento, evaluación y Mejoramiento de los resultados de la Gestión" },
        { nombre: "AC.EA-2.9.2 Integración Sistemas de Información Institucional" },
        { nombre: "AC.EA-2.9.3 Sistema Integrado de Gestión" },
        { nombre: "AC.EA-2.9.4 Gestión Contable y Financiera, transparente y oportuna" },
        { nombre: "AC.EA-3.10.1 Gestión Procesos de Selección, Vinculación, retención y desarrollo de Personal" },
        { nombre: "C.AIS-3.31.1 Seguimiento al Desempeño e Impacto Social de los Egresados" },
        { nombre: "C.AIS-3.31.2 Actualización y Desarrollo Profesional de los Egresados" },
        { nombre: "C.AIS-3.31.3 Construcción de la Comunidad Institucional de Egresados FADP" },
        { nombre: "C.AIS-3.32.1 Empleabilidad y Experiencia Laboral" },
        { nombre: "C.AIS-3.32.2 Emprendimiento y Desarrollo Productivo" },
        { nombre: "C.CA-5.19.1 Ampliación y Diversificación de la Oferta a través de nuevas Modalidades del Servicio y Articulación entre Niveles de Formación" },
        { nombre: "C.CV-4.25.1 Virtualización y Modernización Servicios de Bienestar" },
        { nombre: "C.CV-4.25.2 Fortalecimiento de los Servicios de Bienestar Institucional" },
        { nombre: "C.DI-4.5.1 Estrategia de Publicidad y las Comunicaciones Externas, para el crecimiento y el posicionamiento Institucional" },
        { nombre: "C.DI-4.5.2 Gestión Efectiva de las Comunicaciones Internas" },
        { nombre: "F.AIS.5-34.1 Respuesta a problemas y necesidades del Sector Productivo, de las Instituciones y/o de las Comunidades" },
        { nombre: "F.AIS.5-34.2 Gestión estratégica de la Extensión y la Proyección Social" },
        { nombre: "F.CA-4.21.1 Gestión de los Recursos TIC para la Enseñanza-Aprendizaje" },
        { nombre: "F.DI-4.7.1 Redefinición/Transformación Oferta Educativa" },
        { nombre: "F.DI-4.7.2 Ampliación de la Oferta" },
        { nombre: "F.DI-4.7.3 Orientado al Crecimiento y Posicionamiento Institucional y de los Programas" },
        { nombre: "F.EA-1.15.1 Ejecución Presupuestal Eficiente y Transparente" },
        { nombre: "F.EA-1.15.2 Fomento del Ahorro y la Capitalización" },
        { nombre: "F.EA-1.15.3 Equilibrio y Sostenibilidad Financiera" },
        { nombre: "F.EA-1.15.4 Gestión de nuevas fuentes de Financiación, alivios e incentivos para el fomento de la Educación Superior" },
        { nombre: "F.EA-5.14.1 Fortalecimiento del Comportamiento Financiero a través de la Ampliación de la Cobertura y el Crecimiento de la Población Estudiantil" },
        { nombre: "PI.AIS-2.28.1 Gestión de la Innovación en las Labores asociadas a la Docencia" },
        { nombre: "PI.AIS-2.28.2 Gestión de la Innovación en las Labores asociadas a la Investigación y la Creación" },
        { nombre: "PI.AIS-2.28.3 Gestión de la Innovación en las Labores asociadas a la Extensión y la Proyección Social" },
        { nombre: "PI.AIS-2.29.1 Fomento del Bilingüismo, la Interculturalidad y la Internacionalización en las labores de Docencia." },
        { nombre: "PI.AIS-2.29.3 Fomento de la Interculturalidad y la Internacionalización en las labores de Extensión y Proyección Social" },
        { nombre: "PI.AIS-2.29.4 Movilidad Docente y Estudiantil a nivel nacional e internacional, en procesos de interculturalidad e internacionalización" },
        { nombre: "PI.AIS-4.30.1 Virtualización y Modernización Servicios de Extensión y Proyección Social" },
        { nombre: "PI.CA-1.17.1 Gestión Transparente y Oportuna de los Procesos de Selección y Acceso de los Estudiantes" },
        { nombre: "PI.CA-1.17.2 Gestión Oportuna de la Planeación Académica para cada periodo Académico" },
        { nombre: "PI.CA-1.17.3 Gestión oportuna de la información académica" },
        { nombre: "PI.CA-2.18.1 Revisión y Actualización del PEP" },
        { nombre: "PI.CA-2.18.2 Gestión de Registros de Nuevos Programas" },
        { nombre: "PI.CA-2.18.3 Gestión de la Renovación de Registros Calificados" },
        { nombre: "PI.CA-2.18.4 Evaluación Institucional de los resultados de Aprendizaje" },
        { nombre: "PI.CV-2.24.1 Gestión para el Acceso, la Permanencia y la Graduación" },
        { nombre: "PI.CV-2.24.2 Gestión de Becas y alivios económicos para el acceso, la permanencia y la graduación" },
        { nombre: "PI.DI-1.2.1 Reporte y Actualización oportuna de la información requerida por los Sistemas Nacionales de Información" },
        { nombre: "PI.DI-1.2.2 Atención oportuna y en debida forma, de los asuntos jurídicos y requerimientos legales a la Institución" },
        { nombre: "PI.DI-1.2.3 Socialización y Divulgación de los avances y resultados de la Gestión Académica" },
        { nombre: "PI.DI-1.2.4 Socialización y Divulgación de los avances y resultados de la Gestión Administrativa" },
        { nombre: "PI.DI-1.3.1 Revisión y Actualización de los Lineamientos Institucionales" },
        { nombre: "PI.DI-1.3.2 Revisión y Actualización de las Políticas Académicas" },
        { nombre: "PI.DI-1.3.3 Revisión y Actualización de las Políticas de Gestión Institucional y del Bienestar" },
        { nombre: "PI.DI-1.3.4 Revisión y apropiación de la normatividad vigente aplicable al Sector" },
        { nombre: "PI.DI-2.4.1 Autoevaluación, Coevaluación y Heteroevaluación Condiciones de Calidad Institucionales y de Programas" },
        { nombre: "PI.DI-2.4.2 Gestión de la Evaluación de la Gestión Curricular" },
        { nombre: "PI.DI-2.4.3 Autoevaluación, Coevaluación y Heteroevaluación del Desempeño" },
        { nombre: "PI.DI-2.4.4 Evaluación de la satisfacción de los usuarios y la comunidad institucional" },
        { nombre: "PI.EA-2.11.1 Adquisición y/o Renovación de los Medios Educativos y de Gestión Administrativa" },
        { nombre: "PI.EA-2.11.2 Modernización y/o Adaptación de los Ambientes Físicos y Virtuales para el Aprendizaje" },
        { nombre: "PI.EA-2.11.3 Gestión de otros Recursos, Espacios y Ambientes de Aprendizaje" },
        { nombre: "PI.EA-2.11.4 Control de Activos Fijos" },
        { nombre: "PI.EA-2.12.1 Diseño e Implementación del Sistema de Gestión Documental" },
        { nombre: "PI.EA-4.13.1 Virtualización de los procesos para la gestión administrativa" },
        { nombre: "PI.EA-4.13.2 Virtualización de los procesos para la gestión Académica" },
        { nombre: "RS.AIS-5.33.1 Voluntariado Social" },
        { nombre: "RS.AIS-5.33.2 Voluntariado Ambiental" },
        { nombre: "RS.CA-5.20.1 Gestión de la Investigación Formativa" },
        { nombre: "RS.CA-5.20.2 Gestión de la Investigación Docente" },
        { nombre: "RS.CV-5.26.1 Diversidad, Inclusión y Equidad" },
        { nombre: "RS.CV-5.26.2 Prevención de la Violencia Sexual y de la Violencia Basada en Género" },
        { nombre: "RS.DI-5.6.1 Implementación de los Objetivos del Desarrollo Sostenible en la gestión estratégica de la Institución" }
    ];
    
    

// Insertar los objetos de los Proyectos en la base de datos
Proyecto.insertMany(proyectosData)
    .then(() => console.log('Proyectos insertados correctamente'))
    .catch(error => console.error('Error al insertar Proyectos:', error));

module.exports = Proyecto;



