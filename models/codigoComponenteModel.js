const mongoose = require('mongoose');
const { Schema } = mongoose;

const codigoComponenteSchema = mongoose.Schema({
    nombre: String,
    proyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' }
},
{timestamps: true}      //una propiedad para que se coloque la fecha
);

const CodigoComponente = mongoose.model('CodigoComponente', codigoComponenteSchema);


// Datos de los Componentes
const datosComponentes = [
    'F.DI-4.7.2.3',
    'F.DI-4.7.3.1',
    'F.EA-5.14.1.1',
    'PI.EA-2.11.1.1',
    'PI.EA-2.11.3.2',
    'PI.EA-2.12.1.1',
    'PI.EA-2.12.1.2',
    'PI.EA-2.12.1.3',
    'PI.EA-2.12.1.4',
    'AC.EA-2.9.4.1',
    'AC.EA-2.9.4.2',
    'AC.EA-2.9.4.3',
    'F.EA-1.15.1.1',
    'F.EA-1.15.1.2',
    'AC.CV-1.22.1.1',
    'AC.CV-1.22.1.2',
    'AC.CV-1.22.2.1',
    'AC.CV-1.22.2.2',
    'AC.CV-1.22.2.3',
    'AC.CV-3.23.1.1',
    'AC.CV-3.23.1.2',
    'AC.CV-3.23.2.1',
    'AC.CV-3.23.2.2',
    'AC.CV-3.23.2.3',
    'AC.CV-3.23.3.1',
    'AC.CV-3.23.3.2',
    'AC.CV-3.23.3.3',
    'AC.DI-3.1.2.3',
    'C.AIS-3.32.1.3',
    'C.CV-4.25.1.1',
    'C.CV-4.25.1.2',
    'C.CV-4.25.1.3',
    'C.CV-4.25.2.1',
    'C.CV-4.25.2.2',
    'PI.CV-2.24.1.2',
    'PI.DI-1.3.3.1',
    'PI.DI-2.4.4.2',
    'PI.EA-2.11.3.1',
    'RS.CV-5.26.1.1',
    'RS.CV-5.26.1.2',
    'RS.CV-5.26.2.1',
    'RS.CV-5.26.2.2',
    'RS.CV-5.26.2.3',
    'C.DI-4.5.1.3',
    'F.DI-4.7.3.3',
    'F.EA-1.15.4.2',
    'F.EA-5.14.1.3',
    'PI.CA-1.17.1.1',
    'PI.CA-1.17.1.2',
    'PI.CA-1.17.3.1',
    'PI.CV-2.24.1.1',
    'PI.CV-2.24.2.1',
    'PI.CV-2.24.2.2',
    'PI.CV-2.24.2.3',
    'AC.EA-2.9.1.2',
    'F.EA-1.15.1.3',
    'PI.DI-1.2.3.2',
    'PI.DI-1.2.4.2',
    'PI.EA-4.13.1.3',
    'RS.DI-5.6.1.4',
    'C.DI-4.5.1.1',
    'C.DI-4.5.1.2',
    'C.DI-4.5.2.1',
    'C.DI-4.5.2.2',
    'PI.DI-1.2.1.3',
    'PI.EA-2.11.1.2',
    'PI.EA-2.11.2.2',
    'PI.EA-2.11.2.3',
    'PI.EA-2.11.4.2',
    'AC.CA-3.16.3.1',
    'AC.EA-1.8.1.1',
    'AC.EA-1.8.1.2',
    'AC.EA-1.8.1.3',
    'AC.EA-2.9.3.2',
    'AC.EA-3.10.1.1',
    'AC.EA-3.10.1.2',
    'AC.EA-3.10.1.3',
    'AC.EA-3.10.1.4',
    'AC.EA-3.10.1.6',
    'PI.DI-1.3.1.3',
    'PI.DI-1.3.1.4',
    'PI.DI-2.4.3.1',
    'PI.DI-2.4.3.2',
    'RS.CV-5.26.1.3',
    'AC.EA-2.9.2.2',
    'PI.CA-1.17.1.3',
    'PI.CA-1.17.3.2',
    'PI.CA-1.17.3.3',
    'PI.CV-2.24.1.3',
    'PI.DI-1.3.1.5',
    'AC.EA-2.9.2.1',
    'F.CA-4.21.1.1',
    'F.CA-4.21.1.2',
    'PI.DI-1.2.1.1',
    'PI.DI-1.3.3.2',
    'PI.EA-2.11.1.3',
    'PI.EA-2.11.2.1',
    'PI.EA-2.11.3.3',
    'PI.EA-4.13.1.1',
    'PI.EA-4.13.1.2',
    'PI.EA-4.13.2.1',
    'PI.EA-4.13.2.2',
    'AC.EA-2.9.3.1',
    'PI.CA-2.18.1.1',
    'PI.CA-2.18.1.2',
    'PI.CA-2.18.3.1',
    'PI.CA-2.18.3.2',
    'PI.DI-2.4.1.1',
    'PI.DI-2.4.1.2',
    'PI.DI-2.4.1.3',
    'PI.CA-2.18.2.2',
    'F.DI-4.7.2.4',
    'AC.AIS-1.27.2.1',
    'AC.AIS-1.27.3.1',
    'AC.CA-3.16.3.2',
    'AC.CA-3.16.3.3',
    'PI.AIS-2.29.1.3',
    'PI.AIS-2.29.4.1',
    'PI.AIS-2.29.4.2',
    'PI.AIS-2.29.4.3',
    'AC.EA-2.9.3.3',
    'PI.DI-2.4.3.3',
    'PI.DI-2.4.4.1',
    'AC.AIS-1.27.2.2',
    'PI.CA-1.17.2.2',
    'PI.DI-1.3.2.2',
    'RS.CA-5.20.1.1',
    'RS.CA-5.20.1.2',
    'RS.CA-5.20.2.1',
    'RS.CA-5.20.2.2',
    'AC.AIS-1.27.1.1',
    'AC.AIS-1.27.3.2',
    'F.AIS-5.34.1.1',
    'F.AIS-5.34.1.2',
    'F.AIS-5.34.1.3',
    'F.AIS-5.34.2.1',
    'F.AIS-5.34.2.2',
    'F.DI-4.7.1.3',
    'PI.AIS-2.29.3.1',
    'PI.AIS-4.30.1.1',
    'PI.AIS-4.30.1.2',
    'PI.AIS-4.30.1.3',
    'PI.DI-1.3.2.3',
    'RS.AIS-5.33.1.1',
    'RS.AIS-5.33.1.2',
    'RS.AIS-5.33.2.1',
    'RS.AIS-5.33.2.2',
    'AC.EA-1.8.2.1',
    'AC.EA-1.8.2.2',
    'C.AIS-3.32.2.1',
    'C.AIS-3.32.2.2',
    'C.AIS-3.32.2.3',
    'PI.AIS-2.28.1.1',
    'PI.AIS-2.28.1.2',
    'PI.AIS-2.28.2.1',
    'PI.AIS-2.28.2.2',
    'PI.AIS-2.28.3.1',
    'PI.AIS-2.28.3.2',
    'C.AIS-3.31.2.2',
    'C.AIS-3.31.1.1',
    'C.AIS-3.31.1.2',
    'C.AIS-3.31.2.1',
    'C.AIS-3.31.3.1',
    'C.AIS-3.31.3.2',
    'C.AIS-3.32.1.1',
    'C.AIS-3.32.1.2',
    'AC.CV-1.22.1.3',
    'AC.DI-3.1.1.1',
    'AC.DI-3.1.1.2',
    'PI.DI-1.2.2.1',
    'PI.DI-1.2.2.2',
    'PI.DI-1.3.1.1',
    'PI.DI-1.3.1.2',
    'PI.CA-1.17.2.1',
    'AC.AIS-1.27.2.3',
    'AC.AIS-1.27.3.3',
    'AC.CA-3.16.1.1',
    'AC.CA-3.16.2.1',
    'AC.CA-3.16.2.2',
    'AC.DI-3.1.2.2',
    'AC.EA-2.9.1.1',
    'AC.EA-3.10.1.5',
    'C.CA-5.19.1.2',
    'F.DI-4.7.1.2',
    'PI.CA-2.18.2.3',
    'PI.CA-2.18.4.1',
    'PI.CA-2.18.4.2',
    'PI.CA-2.18.4.3',
    'PI.DI-1.2.3.1',
    'PI.DI-1.3.2.1',
    'PI.DI-1.3.4.1',
    'PI.DI-2.4.2.1',
    'PI.DI-2.4.2.2',
    'PI.DI-2.4.2.3',
    'RS.DI-5.6.1.1',
    'RS.DI-5.6.1.3',
    'AC.DI-3.1.1.3',
    'AC.DI-3.1.2.1',
    'AC.EA-2.9.1.3',
    'F.EA-1.15.2.1',
    'F.EA-1.15.2.2',
    'F.EA-1.15.2.3',
    'F.EA-1.15.3.1',
    'F.EA-1.15.3.2',
    'F.EA-1.15.4.1',
    'PI.DI-1.2.1.2',
    'PI.DI-1.2.4.1',
    'PI.DI-1.3.3.3',
    'PI.DI-1.3.4.2',
    'RS.DI-5.6.1.2'
];

// Guardar los datos de los Componentes
Componente.insertMany(datosComponentes)
    .then(() => {
        console.log('Datos de Componentes insertados correctamente.');
    })
    .catch(err => {
        console.error('Error al insertar datos de Componentes:', err);
    });


module.exports = CodigoComponente;
