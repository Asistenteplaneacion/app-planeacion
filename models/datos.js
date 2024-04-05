const mongoose = require('mongoose')

const datosSchema = mongoose.Schema({      //es crear las variables para hacer el modelo
    megas: String,
    perspectiva: String,
    eje: String,
    objetivoEstrategico: String,
    politica: String,
    programa: String,
    responsablePrograma: String,
    proyecto: String,
    responsableProyecto: String,
    codigoComponente: String,
    componente: String,
    responsableComponente: String,
    macroactividad: String,
    actividad: String,
    periodoEjecucion: String,
    deleted: {type: Boolean, default: false},
},
{timestamps: true}      //una propiedad para que se coloque la fecha
)


const Dato = mongoose.model('Dato', datosSchema) // aca despues de productSchema, colocaria coma y le colocaria nombre, pero si lo dejo asi, el coloca por defecto el nombre de la constante 'Product'


module.exports = Dato
