// const Eje = require('../models/ejeEstrategicoModel');


// const getPerspectiva = async (req, res) => {
//     try {
//         const perspectiva = await Perspectiva.aggregate([
//             {
//                 $match: { deleted: false }
//             },
//             {
//                 $sort: { _id: -1 }
//             },
//             {
//                 $limit: 10
//             },
//             {
//                 $group: {
//                     _id: '$_id',
//                     perspectiva: { $first: '$perspectiva' }
//                 }
//             },
//             {
//                 $project: {
//                     _id: '$_id',
//                     perspectiva: '$perspectiva'
//                 }
//             },
//             {
//                 $sort: {
//                     _id: -1
//                 }
//             }
//         ]);

//         res.status(200).json({ ok: true, perspectiva });
//     } catch (error) {
//         res.status(500).json({ ok: false, error: error.message });
//     }
// }




// const getEje = async () => {
//     const eje = await Eje.aggregate(  // (1) Padre --- (Categories)
//         [
//             {
//                 $lookup:
//                 {
//                     from: "perspectiva", // (2) Hijo -- (Publicaciones)
//                     let:{
//                         aliasNombreMega: "$nombre" // (1) Nombre de la categoria [ Tech, Salud]   
//                     },
//                     pipeline: [ // (2)  publicaciones
//                         {
//                             $match:{
//                                 $expr:{
//                                     $in: [ "$$aliasNombreMega", "$perspectiva",]
//                                 }
//                             }
//                         }
//                     ],
//                     as: 'listaDePerspectivasEncontradas'
//                 }
//             }
//         ]
//     )
//     console.log('******** RESULTADOS ******', JSON.stringify(eje));
// }

// module.exports = {
//     getEje
// };