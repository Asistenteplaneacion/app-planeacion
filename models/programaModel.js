const mongoose = require('mongoose');

const programaSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    politica: { type: Object, ref: 'Politica' }
},
{timestamps: true, versionKey: false}     //una propiedad para que se coloque la fecha
);

const Programa = mongoose.model('Programa', programaSchema);


// Datos de ejemplo para los Programas
const programasData ={
    nombre: 'F.DI-4.7. Ampliación de la Cobertura y Diversificación de la Oferta',
    politica: {
        nombre: "valorPolitica"
    }
};
    // 'F.DI-4.7. Ampliación de la Cobertura y Diversificación de la Oferta',
    // 'F.EA-5.14. Crecimiento y Sostenibilidad Institucional para garantizar el Servicio Educativo con Calidad, Pertinencia e Impacto Social',
    // 'PI.EA-2.11. Modernización y/o Adaptación de la Infraestructura Física y Ambientes de Aprendizaje',
    // 'PI.EA-2.12. Implementación y Actualización del Sistema de Gestión Documental',
    // 'AC.EA-2.9. Cultura de Autorregulación y Mejoramiento Permanente en la Gestión de los Procesos Académicos, Administrativos y Financieros',
    // 'F.EA-1.15. Gestión Ética y Eficiente de los Recursos, para el Crecimiento Financiero y la Sostenibilidad Económica en cumplimiento de los propósitos institucionales',
    // 'AC.CV-1.22. Construcción de Comunidad Institucional, para el fortalecimiento de la Calidad Académica y la Calidad de Vida',
    // 'AC.CV-3.23. Fomento del Desarrollo Humano y la Formación Integral',
    // 'AC.DI-3.1. Fomento de la cultura de participación  de la Comunidad para el desarrollo Institucional',
    // 'C.AIS-3.32. Emprendimiento y Empleabilidad',
    // 'C.CV-4.25. Fortalecimiento, Modernización y Virtualización de los Servicios de Bienestar Institucional',
    // 'PI.CV-2.24. Historia de Vida',
    // 'PI.DI-1.3. Gestión de un marco normativo actualizado y coherente con los postulados misionales, en cumplimiento de la normatividad vigente',
    // 'PI.DI-2.4. Actualización y Gestión del Sistema de Aseguramiento de la Calidad',
    // 'RS.CV-5.26. Fomento de la Inclusión, la Equidad, la Convivencia y el Tejido Social',
    // 'C.DI-4.5. Gestión Estratégica de la Publicidad y las Comunicaciones Internas y Externas',
    // 'PI.CA-1.17. Gestión Transparente, Oportuna y en Debida Forma, de la Información y los Procesos Académicos',
    // 'PI.DI-1.2. Cultura de la Rendición de Cuentas a todos los Grupos de Interés',
    // 'PI.EA-4.13. Modernización de la Gestión a través de la Digitalización y Virtualización de Procesos y Servicios Administrativos y Académicos',
    // 'RS.DI-5.6. Articulación estratégica con propósitos nacionales e internacionales hacia el desarrollo social y económico sostenible',
    // 'AC.CA-3.16. Desarrollo Profesoral',
    // 'AC.EA-1.8. Gestión del Conocimiento y del Aprendizaje Organizacional',
    // 'AC.EA-3.10. Atracción, Retención y Desarrollo del Talento Humano',
    // 'F.CA-4.21. Implementación y Fomento de las TIC en la Oferta Académica',
    // 'PI.CA-2.18. Pertinencia y Actualización Curricular',
    // 'AC.AIS-1.27. Gestión Transparente y Pertinente de las relaciones y las alianzas estratégicas con el Sector Externo a nivel regional, nacional e internacional',
    // 'PI.AIS-2.29. Gestión y fomento de la Internacionalización  y la Interculturalidad',
    // 'RS.CA-5.20. Contextualización e impacto Social de la Investigación y la creación',
    // 'F.AIS.5-34. Transferencia del Conocimiento para el impacto social y el desarrollo institucional',
    // 'PI.AIS-4.30. Fortalecimiento, Modernización y Virtualización de la Extensión y la Proyección Social',
    // 'RS.AIS-5.33. Fomento de la Solidaridad y la Correponsabilidad Social y Ambiental',
    // 'PI.AIS-2.28. Fomento de la Innovación en los procesos de Gestión Académica (docencia, investigación, Extensión y proyección social)',
    // 'C.AIS-3.31. Seguimiento, Actualización y Desarrollo Profesional de los Egresados',
    // 'C.CA-5.19. Rutas de Formación y Aprendizaje e Implementación de nuevas modalidades de educación'

// Insertar los objetos de los Programas en la base de datos
Programa.insertMany(programasData.map(programa => ({ nombre: programa })))
    .then(() => console.log('Programas insertados correctamente'))
    .catch(error => console.error('Error al insertar Programas:', error));


module.exports = Programa;
