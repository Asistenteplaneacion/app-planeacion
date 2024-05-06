const mongoose = require('mongoose');

const ComponenteSchema = mongoose.Schema({
    codigoComponente: {type: String, required: true},
    
},
{timestamps: true, versionKey: false}      //una propiedad para que se coloque la fecha
);

const Componente = mongoose.model('Componente', ComponenteSchema);


// Datos de los Componentes
const componenteData = 
[
    {
        codigoComponente: "AC.AIS-1.27.1.1 Gestión, Revisión y/o Actualización de los Convenios, Alianzas Estratégicas y/o Contratos con el Sector Externo, para el desarrollo de las labores relacionadas con la Docencia"
    },
    {
        codigoComponente: "AC.AIS-1.27.2.1 Gestión, Revisión y/o Actualización de los Convenios, Alianzas Estratégicas y/o Contratos con el Sector Externo, para el desarrollo de las labores relacionadas con la Investigación, la Innovación y/o la Creación"
    },
    {
        codigoComponente: "AC.AIS-1.27.2.2 Participación en Comités, Mesas Técnicas y Redes de Cooperación para el desarrollo de las labores relacionadas con la Investigación, la Innovación y/o la Creación"
    },
    {
        codigoComponente: "AC.AIS-1.27.2.3 Evaluación de Impacto en las labores de Investigación, la Innovación y/o la Creación, a partir de la articulación con el Sector Externo"
    },
    {
        codigoComponente: "AC.AIS-1.27.3.1 Gestión, Revisión y/o Actualización de los Convenios, Alianzas Estratégicas y/o Contratos con el Sector Externo, para el desarrollo de las labores relacionadas con la Extensión y la Proyección Social"
    },
    {
        codigoComponente: "AC.AIS-1.27.3.2 Participación en Comités, Mesas Técnicas y Redes de Cooperación para el desarrollo de las labores relacionadas con la Extensión y la Proyección Social"
    },
    {
        codigoComponente: "AC.AIS-1.27.3.3 Evaluación de Impacto en las labores de Extensión y la Proyección Social, a partir de la articulación con el Sector Externo"
    },
    {
        codigoComponente: "AC.CA-3.16.1.1 Capacitación y cualificación docente en Competencias Pedagógicas y Didácticas"
    },
    {
        codigoComponente: "AC.CA-3.16.2.1 Cualificación Docente en Competencias Específicas de las disciplinas, para la actualización del conocimiento"
    },
    {
        codigoComponente: "AC.CA-3.16.2.2 Cualificación Docente en Competencias Investigativas, de Innovación y Creación desde el rol Docente"
    },
    {
        codigoComponente: "AC.CA-3.16.3.1 Fortalecimiento de la Dimensión Deontológica del ejercicio docente"
    },
    {
        codigoComponente: "AC.CA-3.16.3.2 Fortalecimiento competencias en Bilingüismo"
    },
    {
        codigoComponente: "AC.CA-3.16.3.3 Fomento de la Interculturalidad y la Internacionalización"
    },
    {
        codigoComponente: "AC.CV-1.22.1.1 Construcción Comunidad Estudiantil"
    },
    {
        codigoComponente: "AC.CV-1.22.1.2 Construcción de la Comunidad de Docentes, Personal Administrativo y de Servicios"
    },
    {
        codigoComponente: "AC.CV-1.22.1.3 Construcción de la Comunidad de Egresados"
    },
    {
        codigoComponente: "AC.CV-1.22.2.1 Gestión de productos y servicios de formación y de Bienestar, para los grupos familiares del personal docente, administrativo y de servicios vinculado a la FADP"
    },
    {
        codigoComponente: "AC.CV-1.22.2.2 Gestión de productos y servicios de formación y de Bienestar, para los grupos familiares de la Comunidad Estudiantil de la FADP"
    },
    {
        codigoComponente: "AC.CV-1.22.2.3 Gestión de productos y servicios de formación y de Bienestar, para los grupos familiares de la Comunidad de Egresados de la FADP"
    },
    {
        codigoComponente: "AC.CV-3.23.1.1 Estrategias para el fomento de la Vida Saludable y el Autocuidado a nivel físico y mental"
    },
    {
        codigoComponente: "AC.CV-3.23.1.2 Evaluación y Plan de Mejoramiento de los Servicios de Bienestar relacionados con la Salud y el Autocuidado a nivel físico y mental"
    },
    {
        codigoComponente: "AC.CV-3.23.2.1 Caracterización de las necesidades e intereses  de la Comunidad Institucional frente al Arte y la Cultura"
    },
    {
        codigoComponente: "AC.CV-3.23.2.2 Estrategias para el fomento del Arte y la Cultura entre la Comunidad Institucional"
    },
    {
        codigoComponente: "AC.CV-3.23.2.3 Evaluación y Plan de Mejoramiento de los Servicios de Bienestar relacionados con el Arte y la Cultura"
    },
    {
        codigoComponente: "AC.CV-3.23.3.1 Caracterización de las necesidades e intereses  de la Comunidad Institucional frente la recreación, uso del tiempo libre, el Deporte y la Actividad Física"
    },
    {
        codigoComponente: "AC.CV-3.23.3.2 Estrategias para el fomento de la recreación, uso del tiempo libre, el Deporte y la Actividad Física, entre la Comunidad Institucional"
    },
    {
        codigoComponente: "AC.CV-3.23.3.3 Evaluación y Plan de Mejoramiento de los Servicios de Bienestar relacionados con la recreación, uso del tiempo libre, Deporte y la Actividad Física"
    },
    {
        codigoComponente: "AC.DI-3.1.1.1 Gestión de la Asamblea General para el Desarrollo Institucional"
    },
    {
        codigoComponente: "AC.DI-3.1.1.2 Gestión de la Participación del Consejo Superior y Académico en el desarrollo institucional"
    },
    {
        codigoComponente: "AC.DI-3.1.1.3 Gestión de la Participación del Consejo Administrativo y Financiero en el desarrollo institucional"
    },
    {
        codigoComponente: "AC.DI-3.1.2.1 Gestión de los Comités de Apoyo, para el fortalecimiento de los procesos de la dimensión institucional, administrativa y financiera"
    },
    {
        codigoComponente: "AC.DI-3.1.2.2 Gestión de los Comités de Apoyo, para el fortalecimiento de los procesos de la dimensión Académica"
    },
    {
        codigoComponente: "AC.DI-3.1.2.3 Gestión del Liderazgo Estudiantil para el desarrollo institucional"
    },
    {
        codigoComponente: "AC.EA-1.8.1.1 Estructuración del Modelo de Gestión del Conocimiento y del Aprendizaje Organizacional para la FADP"
    },
    {
        codigoComponente: "AC.EA-1.8.1.2 Implementación y Desarrollo del Modelo de Gestión del Conocimiento y del Aprendizaje Organizacional para la FADP"
    },
    {
        codigoComponente: "AC.EA-1.8.1.3 Evaluación y Plan de Mejoramiento en la Gestión del Conocimiento y del Aprendizaje Organizacional para la FADP"
    },
    {
        codigoComponente: "AC.EA-1.8.2.1 Estrategias de fomento de la Innovación en los Procesos Administrativos de la Institución"
    },
    {
        codigoComponente: "AC.EA-1.8.2.2 Evaluación y plan de mejoramiento en los procesos de innovación implementados"
    },
    {
        codigoComponente: "AC.EA-2.9.1.1 Evaluación y Mejoramiento de los procesos de Gestión académica"
    },
    {
        codigoComponente: "AC.EA-2.9.1.2 Evaluación y Mejoramiento de los procesos de Gestión administrativa"
    },
    {
        codigoComponente: "AC.EA-2.9.1.3 Evaluación y Mejoramiento de los procesos de Gestión financiera"
    },
    {
        codigoComponente: "AC.EA-2.9.2.1 Articulación SIGA-CG1-SIABUC y demás sistemas de Información Institucional"
    },
    {
        codigoComponente: "AC.EA-2.9.2.2 Gestión, Actualización y Verificación de Información Estadística Institucional"
    },
    {
        codigoComponente: "AC.EA-2.9.3.1 Gestión por Procesos: Actualización y aplicación a nuevos requerimientos MEN"
    },
    {
        codigoComponente: "AC.EA-2.9.3.2 Gestión SST"
    },
    {
        codigoComponente: "AC.EA-2.9.3.3 Identificación y Gestión de Riesgos Académicos, Administrativos y Financieros"
    },
    {
        codigoComponente: "AC.EA-2.9.4.1 Gestión oportuna de la contabilidad y los reportes contables y financieros de la Institución"
    },
    {
        codigoComponente: "AC.EA-2.9.4.2 Gestión responsable y transparente de la Cartera Estudiantil"
    },
    {
        codigoComponente: "AC.EA-2.9.4.3 Gestión eficiente de los recursos de Caja Menor asignados a las áreas"
    },
    {
        codigoComponente: "AC.EA-3.10.1.1 Selección y Vinculación de Personal para la Gestión de los procesos académicos"
    },

    
    {
        codigoComponente: "AC.EA-3.10.1.2 Selección y Vinculación de Personal para la Gestión de los procesos administrativos"
    },
    {
        codigoComponente: "AC.EA-3.10.1.3 Evaluación y Plan de Mejoramiento de los procesos de selección y vinculación del personal para la Gestión administrativa y académica"
    },
    {
        codigoComponente: "AC.EA-3.10.1.4 Plan estratégico de Desarrollo del Personal Administrativo"
    },
    {
        codigoComponente: "AC.EA-3.10.1.5 Plan Estratégico de Desarrollo del Personal Docente"
    },
    {
        codigoComponente: "AC.EA-3.10.1.6 Evaluación y Plan de Mejoramiento de los procesos para el Desarrollo del Personal Docente y Administrativo"
    },
    {
        codigoComponente: "C.AIS-3.31.1.1 Estrategias de Comunicación y Seguimiento de los Egresados"
    },
    {
        codigoComponente: "C.AIS-3.31.1.2 Evaluación y Mejoramiento de las Estrategias de Comunicación y Seguimiento de los Egresados"
    },
    {
        codigoComponente: "C.AIS-3.31.2.1 Plan de Capacitación y Actualización para el fortalecimiento de las competencias laborales de los Egresados"
    },
    {
        codigoComponente: "C.AIS-3.31.2.2 Fortalecimiento del Impacto de los Egresados en el Medio"
    },
    {
        codigoComponente: "C.AIS-3.31.3.1 Vinculación de los Egresados en la dinámica Institucional"
    },
    {
        codigoComponente: "C.AIS-3.31.3.2 Gestión de la Red de Egresados FADP"
    },
    {
        codigoComponente: "C.AIS-3.32.1.1 Identificación de Competencias Laborales y Perfil Ocupacional requerido por las empresas"
    },
    {
        codigoComponente: "C.AIS-3.32.1.2 Gestión de Jornadas de Empleabilidad para Egresados"
    },
    {
        codigoComponente: "C.AIS-3.32.1.3 Gestión de Prácticas Empresariales para Estudiantes"
    },
    {
        codigoComponente: "C.AIS-3.32.2.1 Acompañamiento de Estudiantes, Egresados y personal vinculado a la FADP, para el Emprendimiento y el Desarrollo Productivo a través del Programa JUMP!"
    },
    {
        codigoComponente: "C.AIS-3.32.2.2 Gestión de aliados estratégicos para el apoyo al emprendimiento de la Comunidad vinculada a la FADP y al Programa JUMP!"
    },
    {
        codigoComponente: "C.AIS-3.32.2.3 Feria del Emprendimiento y el Desarrollo Productivo"
    },
    {
        codigoComponente: "C.CA-5.19.1.2 Estructuración e implementación del núcleo común e interdisciplinar"
    },
    {
        codigoComponente: "C.CV-4.25.1.1 Caracterización necesidades comunidad institucional en torno a la virtualización de servicios de Bienestar"
    },
    {
        codigoComponente: "C.CV-4.25.1.2 Diseño e Implementación de Servicios de Bienestar para el entorno virtual"
    },
    {
        codigoComponente: "C.CV-4.25.1.3 Evaluación y Mejoramiento servicios de Bienestar en el entorno virtual"
    },
    {
        codigoComponente: "C.CV-4.25.2.1 Gestión de Alianzas y Convenios para el fortalecimiento de los servicios de Bienestar"
    },
    {
        codigoComponente: "C.CV-4.25.2.2 Evaluación de impacto de las alianzas estratégicas y convenios para el fortalecimiento de los servicios de Bienestar"
    },
    {
        codigoComponente: "C.DI-4.5.1.1 Gestión Estratégica y Transparente de la Imagen y la Identidad Institucional"
    },
    {
        codigoComponente: "C.DI-4.5.1.2 Gestión Estratégica del Plan de Medios Publicitarios"
    },
    {
        codigoComponente: "C.DI-4.5.1.3 Gestión Efectiva de las Relaciones Públicas y las Comunicaciones Externas"
    },
    {
        codigoComponente: "C.DI-4.5.2.1 Gestión, Evaluación y Mejoramiento del Plan de Comunicación Interna con toda la Comunidad Institucional"
    },
    {
        codigoComponente: "C.DI-4.5.2.2 Gestión de la interacción, la interrelación y la articulación entre las unidades de la Institución"
    },
    {
        codigoComponente: "F.AIS-5.34.1.1 Observatorio necesidades del Sector Productivo, la Industria, las Instituciones y/o las Comunidades"
    },
    {
        codigoComponente: "F.AIS-5.34.1.2 Planteamiento y Ejecución de Proyectos Integradores para la solución de problemáticas sociales, institucionales y/o del sector productivo y la industria"
    },
    {
        codigoComponente: "F.AIS-5.34.1.3 Evaluación de Impacto de los resultados de los proyectos desarrollados para la atención de necesidades del Sector Productivo, la Industria, la sociedad o las instituciones"
    },
    {
        codigoComponente: "F.AIS-5.34.2.1 Gestión y Participación en Licitaciones y Convocatorias externas para la contratación de servicios y/o desarrollo de productos desde la UPIS"
    },
    {
        codigoComponente: "F.AIS-5.34.2.2 Evaluación de Impacto de la participación en licitaciones y convocatorias externas para la contratación de servicios y/o desarrollo de productos desde la UPIS"
    },
    {
        codigoComponente: "F.CA-4.21.1.1 Implementación y actualización de herramientas TIC en los procesos de enseñanza-aprendizaje."
    },
    {
        codigoComponente: "F.CA-4.21.1.2 Fomento del uso de las herramientas TIC en los procesos de enseñanza-aprendizaje."
    },
    {
        codigoComponente: "F.DI-4.7.1.2 Extensión y/o Regionalización de la Oferta Educativa"
    },
    {
        codigoComponente: "F.DI-4.7.1.3 Gestión e Implementación de una Unidad Estratégica de Negocios (UEN), desde la Proyección Social y la Extensión"
    },
    {
        codigoComponente: "F.DI-4.7.2.3 Gestión de nuevos servicios de Educación Continua y Extensión"
    },
    {
        codigoComponente: "F.DI-4.7.2.4 Gestión de Programas de Educación para el Trabajo y el Desarrollo Humano"
    },
    {
        codigoComponente: "F.DI-4.7.3.1 Crecimiento de la Población Estudiantil en Educación Continua y Extensión"
    },
    {
        codigoComponente: "F.DI-4.7.3.3 Crecimiento de la Población Estudiantil en los Programas de Pregrado"
    },
    {
        codigoComponente: "F.EA-1.15.1.1 Seguimiento de la Ejecución Presupuestal para la Gestión administrativa"
    },
    {
        codigoComponente: "F.EA-1.15.1.2 Seguimiento de la Ejecución Presupuestal para la Gestión académica"
    },
    {
        codigoComponente: "F.EA-1.15.1.3 Gestión proyectos de inversión para el desarrollo institucional, eficiente y transparente"
    },
    {
        codigoComponente: "F.EA-1.15.2.1 Seguimiento de la Ejecución Presupuestal para la Gestión administrativa con fuente de financiación interna para impulsar el desarrollo Institucional"
    },
    {
        codigoComponente: "F.EA-1.15.2.2 Seguimiento de la Ejecución Presupuestal para la Gestión académica optimizando los recursos financieros de la institución para incrementar en su inversión"
    },
    {
        codigoComponente: "F.EA-1.15.2.3 Fomento del Ahorro y la buena Gestión financiera en la comunidad institucional"
    },
    {
        codigoComponente: "F.EA-1.15.3.1 Estudios de Sostenibilidad y Proyección financiera de la oferta académica"
    },
    {
        codigoComponente: "F.EA-1.15.3.2 Proyección financiera de la planta de cargos a nivel académico y administrativo, para cada periodo"
    },
    {
        codigoComponente: "F.EA-1.15.4.1 Gestión de nuevas fuentes de financiación para el desarrollo Institucional"
    },



    {
        codigoComponente: "F.EA-1.15.4.2 Búsqueda y participación institucional en Convocatorias de Financiación y Alivios para el Fomento de la Educación Superior (MEN, ICETEX, Otros)"
    },
    {
        codigoComponente: "F.EA-5.14.1.1 Crecimiento de los Ingresos, a través de la Población Estudiantil vinculada a la Educación Continua"
    },
    {
        codigoComponente: "F.EA-5.14.1.3 Crecimiento de los Ingresos a través de la Población Estudiantil vinculada a los Programas de Pregrado"
    },
    {
        codigoComponente: "PI.AIS-2.28.1.1 Estrategias de acompañamiento para la gestión de la innovación en las labores asociadas a la Docencia"
    },
    {
        codigoComponente: "PI.AIS-2.28.1.2 Evaluación de impacto del plan de acompañamiento en Innovación, para las labores asociadas a la Docencia"
    },
    {
        codigoComponente: "PI.AIS-2.28.2.1 Estrategias de acompañamiento para la gestión de la innovación en las labores asociadas a la Investigación y la Creación"
    },
    {
        codigoComponente: "PI.AIS-2.28.2.2 Evaluación de impacto del plan de acompañamiento en Innovación, para las labores asociadas a la Investigación y la Creación"
    },
    {
        codigoComponente: "PI.AIS-2.28.3.1 Estrategias de acompañamiento para la gestión de la innovación en las labores asociadas a la Extensión y la Proyección Social"
    },
    {
        codigoComponente: "PI.AIS-2.28.3.2 Evaluación de impacto del plan de acompañamiento en Innovación, para las labores asociadas a la Extensión y la Proyección Social"
    },
    {
        codigoComponente: "PI.AIS-2.29.1.3 Evaluación de Impacto de la Internacionalización y la Interculturalidad en los procesos de Docencia"
    },
    {
        codigoComponente: "PI.AIS-2.29.3.1 La interculturalidad en los procesos de extensión y proyección social."
    },
    {
        codigoComponente: "PI.AIS-2.29.4.1 Gestión de la movilidad física y/o virtual de estudiantes, en el contexto regional, nacional e internacional"
    },
    {
        codigoComponente: "PI.AIS-2.29.4.2 Gestión de la movilidad física y/o virtual de Docentes y Personal FADP, en el contexto regional, nacional e internacional"
    },
    {
        codigoComponente: "PI.AIS-2.29.4.3 Gestión de la movilidad física y/o virtual de egresados, en el contexto regional, nacional e internacional"
    },
    {
        codigoComponente: "PI.AIS-4.30.1.1 Caracterización necesidades de la comunidad institucional y del Sector Externo, en torno a la virtualización de servicios de Extensión y Proyección Social"
    },
    {
        codigoComponente: "PI.AIS-4.30.1.2 Diseño e Implementación de Servicios de Extensión y Proyección Social para el entorno virtual."
    },
    {
        codigoComponente: "PI.AIS-4.30.1.3 Evaluación y Mejoramiento servicios de Extensión y Proyección Social en el entorno virtual"
    },
    {
        codigoComponente: "PI.CA-1.17.1.1 Gestión Eficiente procesos de Inscripciones"
    },
    {
        codigoComponente: "PI.CA-1.17.1.2 Gestión Eficiente Procesos de Matrículas"
    },
    {
        codigoComponente: "PI.CA-1.17.1.3 Gestión Eficiente Procesos de Homologaciones, Transferencias y Validaciones"
    },
    {
        codigoComponente: "PI.CA-1.17.2.1 Planeación oportuna y pertinente de los procesos de docencia"
    },
    {
        codigoComponente: "PI.CA-1.17.2.2 Planeación oportuna y pertinente de los procesos de investigación"
    },
    {
        codigoComponente: "PI.CA-1.17.3.1 Gestión transparente y oportuna de la información de inscritos, admitidos y matriculados por Programas y Grupos"
    },
    {
        codigoComponente: "PI.CA-1.17.3.2 Gestión transparente y oportuna de la información de desertores y retirados"
    },
    {
        codigoComponente: "PI.CA-1.17.3.3 Gestión transparente y oportuna de la Información de aspirantes a grado, según cumplimiento requisitos y modalidades de grado"
    },
    {
        codigoComponente: "PI.CA-2.18.1.1 Pertinencia y Actualización Curricular."
    },
    {
        codigoComponente: "PI.CA-2.18.1.2 Revisión y Actualización de las Condiciones de Calidad del Programa"
    },
    {
        codigoComponente: "PI.CA-2.18.2.2 Gestión del Registro Calificado de Nuevos Programas"
    },
    {
        codigoComponente: "PI.CA-2.18.2.3 Implementación del Nuevo Programa Académico"
    },
    {
        codigoComponente: "PI.CA-2.18.3.1 Gestión de la Renovación de los Registros Calificados de los Programas"
    },
    {
        codigoComponente: "PI.CA-2.18.3.2 Gestión de Acreditación para nuevos Programas"
    },
    {
        codigoComponente: "PI.CA-2.18.4.1 Diseño y Estructuración de los Resultados de Aprendizaje"
    },
    {
        codigoComponente: "PI.CA-2.18.4.2 Evaluación de los Resultados de Aprendizaje para cada Programa Académico"
    },
    {
        codigoComponente: "PI.CA-2.18.4.3 Fortalecimiento las competencias generales y específicas de los estudiantes"
    },
    {
        codigoComponente: "PI.CV-2.24.1.1 Estrategias de acompañamiento para el Acceso a la Educación Superior"
    },
    {
        codigoComponente: "PI.CV-2.24.1.2 Gestión de la Permanencia y la Retención Estudiantil"
    },
    {
        codigoComponente: "PI.CV-2.24.1.3 Fomento de la Calidad Académica de los Estudiantes y la Graduación"
    },
    {
        codigoComponente: "PI.CV-2.24.2.1 Gestión de Convenios y Alianzas Estratégicas con el sector público, los gremios y con el sector productivo y otras entidades, para el otorgamiento de becas y/o alivios económicos para el acceso y la permanencia de estudiantes"
    },
    {
        codigoComponente: "PI.CV-2.24.2.2 Gestión oportuna y eficaz de los convenios y protocolos relacionados con los Créditos Educativos, Becas y demás Alivios financieros para estudiantes a través del ICETEX, para cada periodo académico"
    },
    {
        codigoComponente: "PI.CV-2.24.2.3 Gestión oportuna y eficaz de los Programas del Fondo de Becas SER del MEN para cada periodo académico"
    },
    {
        codigoComponente: "PI.DI-1.2.1.1 Reporte de información requerida por el Ministerio de Educación Nacional, Minciencias y otros organismos de regulación y control de la Educación Superior"
    },
    {
        codigoComponente: "PI.DI-1.2.1.2 Reporte de Información a Organismos de Control Fiscal y Administrativo"
    },
    {
        codigoComponente: "PI.DI-1.2.1.3 Reporte y divulgación de la Información en cumplimiento de principios de transparencia y acceso público a la información"
    },
    {
        codigoComponente: "PI.DI-1.2.2.1 Atención oportuna de los asuntos jurídicos frente a situaciones administrativas y laborales"
    },
    {
        codigoComponente: "PI.DI-1.2.2.2 Atención oportuna de los asuntos jurídicos frente a situaciones académicas"
    },
    {
        codigoComponente: "PI.DI-1.2.3.1 Socialización y divulgación de los Resultados de la Gestión de las labores formativas, académicas, docentes, científicas, culturales y de extensión"
    },
    {
        codigoComponente: "PI.DI-1.2.3.2 Socialización de Buenas Prácticas en la Gestión Académica"
    },
    {
        codigoComponente: "PI.DI-1.2.4.1 Socialización y Divulgación de los avances y resultados de la Gestión Administrativa y Financiera"
    },
    {
        codigoComponente: "PI.DI-1.2.4.2 Socialización de Buenas Prácticas en la Gestión Administrativa y Financiera"
    },
    {
        codigoComponente: "PI.DI-1.3.1.1 Gestión de una Reforma Estatutaria de manera que se logre una mayor coherencia con el nuevo desarrollo Institucional"
    },


    {
        codigoComponente: "PI.DI-1.3.1.2 Revisión y Actualización del marco normativo institucional Estatutos Generales, Código de Ética y Buen Gobierno"
    },
    {
        codigoComponente: "PI.DI-1.3.1.3 Revisión y Actualización del Manual de Convivencia Docente"
    },
    {
        codigoComponente: "PI.DI-1.3.1.4 Revisión y Actualización del Escalafón Docente"
    },
    {
        codigoComponente: "PI.DI-1.3.1.5 Revisión y Actualización del Manual de Convivencia Estudiantil"
    },
    {
        codigoComponente: "PI.DI-1.3.2.1 Revisión y Actualización de los Lineamientos para el Diseño Curricular, Créditos Académicos, la Formación Integral, la Interdisciplinariedad, las Actividades Académicas, la Ruta de Formación y los Resultados de Aprendizaje"
    },
    {
        codigoComponente: "PI.DI-1.3.2.2 Revisión y Actualización de los Lineamientos para el fomento de la Investigación, la Creación y la Innovación"
    },
    {
        codigoComponente: "PI.DI-1.3.2.3 Revisión y Actualización de los Lineamientos para el fomento de la extensión y la proyección social"
    },
    {
        codigoComponente: "PI.DI-1.3.3.1 Lineamientos para el Bienestar, y el Desarrollo Humano, la Equidad, Diversidad e Inclusión, la interculturalidad"
    },
    {
        codigoComponente: "PI.DI-1.3.3.2 Lineamientos para la Gestión de la Información y de las Comunicaciones, del Archivo y la Protección de Datos"
    },
    {
        codigoComponente: "PI.DI-1.3.3.3 Revisión y Actualización de los Lineamientos para la Gestión Logística, Administrativa y Financiera (Gestión Talento Humano, Bioseguridad Institucional, Gestión Financiera)"
    },
    {
        codigoComponente: "PI.DI-1.3.4.1 Revisión, apropiación y cumplimiento de la normatividad académica aplicable a la Institución"
    },
    {
        codigoComponente: "PI.DI-1.3.4.2 Revisión, apropiación y cumplimiento de la normatividad administrativa y financiera aplicable a la Institución"
    },
    {
        codigoComponente: "PI.DI-2.4.1.1 Seguimiento y Evaluación de las Condiciones de Calidad Institucionales para Registro Calificado"
    },
    {
        codigoComponente: "PI.DI-2.4.1.2 Seguimiento y Evaluación de las Condiciones de Calidad de Programas, para Registro Calificado"
    },
    {
        codigoComponente: "PI.DI-2.4.1.3 Seguimiento y Evaluación de los Factores de Alta Calidad para Acreditaciones"
    },
    {
        codigoComponente: "PI.DI-2.4.2.1 Evaluación de la Gestión Curricular a nivel Macro (PEI)"
    },
    {
        codigoComponente: "PI.DI-2.4.2.2 Evaluación de la Gestión Curricular a nivel Meso (PEP)"
    },
    {
        codigoComponente: "PI.DI-2.4.2.3 Evaluación de la Gestión Curricular a nivel Micro"
    },
    {
        codigoComponente: "PI.DI-2.4.3.1 Evaluación integral y mejoramiento del desempeño del personal académico"
    },
    {
        codigoComponente: "PI.DI-2.4.3.2 Evaluación integral y mejoramiento del desempeño personal administrativo y de servicios"
    },
    {
        codigoComponente: "PI.DI-2.4.3.3 Evaluación integral y mejoramiento del desempeño personal asesor, contratistas y proveedores"
    },
    {
        codigoComponente: "PI.DI-2.4.4.1 Evaluación y mejoramiento del servicio a los usuarios en los procesos académico-administrativos"
    },
    {
        codigoComponente: "PI.DI-2.4.4.2 Evaluación y mejoramiento del servicio a los usuarios y de su satisfacción frente a los procesos de bienestar y desarrollo humano"
    },
    {
        codigoComponente: "PI.EA-2.11.1.1 Mantenimiento, Actualización y Modernización de la Dotación de Ambientes de Aprendizaje (Recursos Bibliográficos, Bases de Datos, Recursos Tecnológicos y Equipos)"
    },
    {
        codigoComponente: "PI.EA-2.11.1.2 Mantenimiento, Actualización y Modernización de la Dotación de Espacios Administrativos"
    },
    {
        codigoComponente: "PI.EA-2.11.1.3 Cumplimiento normativas técnicas y de propiedad intelectual, derechos de autor y legislación vigente, en relación con los recursos de apoyo académico para la dotación de espacios y ambientes de aprendizaje"
    },
    {
        codigoComponente: "PI.EA-2.11.2.1 Plan Estratégico de mantenimiento, modernización y/o adaptación de la Infraestructura Tecnológica, para la atención de diferentes modalidades de formación"
    },
    {
        codigoComponente: "PI.EA-2.11.2.2 Plan estratégico de mantenimiento, modernización y/o adaptación de la Infraestructura Física, para la atención de diferentes modalidades de formación"
    },
    {
        codigoComponente: "PI.EA-2.11.2.3 Cumplimiento normativas técnicas, uso de suelo y demás requerimientos legales relacionados con la Infraestructura Física y Tecnológica"
    },
    {
        codigoComponente: "PI.EA-2.11.3.1 Gestión de Convenios y/o Contratos para la ampliación de Espacios Físicos para el desarrollo de las labores de la Educación Superior"
    },
    {
        codigoComponente: "PI.EA-2.11.3.2 Gestión de Convenios y/o Contratos para el uso de préstamos interbibliotecarios y bases de datos para el apoyo de las labores de la Educación Superior"
    },
    {
        codigoComponente: "PI.EA-2.11.3.3 Gestión de Convenios y/o Contratos para el uso de recursos tecnológicos de apoyo de las labores de la Educación Superior"
    },
    {
        codigoComponente: "PI.EA-2.11.4.2 Control de Activos Fijos para la Gestión Administrativa"
    },
    {
        codigoComponente: "PI.EA-2.12.1.1 Planteamiento y Estructuración de la Gestión Documental FADP"
    },
    {
        codigoComponente: "PI.EA-2.12.1.2 Gestión Instrumentos Archivísticos"
    },
    {
        codigoComponente: "PI.EA-2.12.1.3 Procesos, Procedimientos y Normatividad Gestión Documental"
    },
    {
        codigoComponente: "PI.EA-2.12.1.4 Almacenamiento y seguridad de la informacion"
    },
    {
        codigoComponente: "PI.EA-4.13.1.1 Fortalecimiento plataforma TIC para el trabajo remoto"
    },
    {
        codigoComponente: "PI.EA-4.13.1.2 Adaptación de procesos de la Gestión administrativa al entorno virtual"
    },
    {
        codigoComponente: "PI.EA-4.13.1.3 Modernización y Adaptación del BSC a las necesidades de la Institución"
    },
    {
        codigoComponente: "PI.EA-4.13.2.1 Modernización y Adaptación del SIGA a las necesidades de la Institución"
    },
    {
        codigoComponente: "PI.EA-4.13.2.2 Adaptación de procesos de la Gestión académica al entorno virtual"
    },
    {
        codigoComponente: "RS.AIS-5.33.1.1 Iniciativas de acción social para la atención de necesidades de comunidades vulnerables"
    },
    {
        codigoComponente: "RS.AIS-5.33.1.2 Evaluación de Impacto de las acciones del Voluntariado Social"
    },
    {
        codigoComponente: "RS.AIS-5.33.2.1 Iniciativas ambientales para el mejoramiento del entorno y la calidad de vida"
    },
    {
        codigoComponente: "RS.AIS-5.33.2.2 Evaluación de Impacto de las acciones del Voluntariado Ambiental"
    },
    {
        codigoComponente: "RS.CA-5.20.1.1 Articulación de la Investigación con la Docencia y la Proyección Social"
    },
    {
        codigoComponente: "RS.CA-5.20.1.2 Gestión y Categorización de los Grupos de Investigación"
    },
    {
        codigoComponente: "RS.CA-5.20.2.1 Gestión de la Investigación Formativa a través de los Semilleros de Investigación"
    },
    {
        codigoComponente: "RS.CA-5.20.2.2 Fomento de la Colaboración Investigativa, para el Mejoramiento del Impacto"
    },
    {
        codigoComponente: "RS.CV-5.26.1.1 Estrategias para el fomento de la Inclusión y la Equidad entre la Comunidad Institucional"
    },
    {
        codigoComponente: "RS.CV-5.26.1.2 Evaluación y Mejoramiento de las estrategias para el fomento de la Inclusión y la Equidad entre la Comunidad Institucional"
    },
    {
        codigoComponente: "RS.CV-5.26.1.3 Convivencia y Tejido Social"
    },
    {
        codigoComponente: "RS.CV-5.26.2.1 Estrategias para la prevención de la VS y la VBG entre la Comunidad Institucional"
    },
    {
        codigoComponente: "RS.CV-5.26.2.2 Evaluación y Mejoramiento de las estrategias para la prevención de la VS y la VBG  entre la Comunidad Institucional"
    },
    {
        codigoComponente: "RS.CV-5.26.2.3 Informe de Gestión de la Prevención de la VS y la VBG al MEN"
    },
    {
        codigoComponente: "RS.DI-5.6.1.1 Implementación de los Objetivos del Desarrollo Sostenible en la Gestión Académica"
    },
    {
        codigoComponente: "RS.DI-5.6.1.2 Implementación de los Objetivos del Desarrollo Sostenible en la Gestión Administrativa"
    },
    {
        codigoComponente: "RS.DI-5.6.1.3 Adhesión a iniciativas globales para el fomento de la RS en la Educación Superior"
    },
    {
        codigoComponente: "RS.DI-5.6.1.4 Implementación y Socialización del Balance Social"
    }


];


// Insertar los objetos de los Proyectos en la base de datos
Componente.insertMany(componenteData)
    .then(() => console.log('Componentes insertados correctamente'))
    .catch(error => console.error('Error al insertar Componentes:', error));

    
module.exports = Componente;
