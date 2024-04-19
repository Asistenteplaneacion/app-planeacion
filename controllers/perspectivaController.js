const Perspectiva = require('../models/perspectivaModel')


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

const getPerspectiva = async () => {
    const perspectiva = await Perspectiva.aggregate(  // (1) Padre --- (Categories)
        [
            {
                $lookup:
                {
                    from: "megas", // (2) Hijo -- (Publicaciones)
                    let:{
                        aliasNombreMega: "$nombre" // (1) Nombre de la categoria [ Tech, Salud]   
                    },
                    pipeline: [ // (2)  publicaciones
                        {
                            $match:{
                                $expr:{
                                    $in: [ "$$aliasNombreMega", "$megas",]
                                }
                            }
                        }
                    ],
                    as: 'listaDeMegasEncontradas'
                }
            }
        ]
    )
    console.log('******** RESULTADOS ******', JSON.stringify(perspectiva));
}

module.exports = {
    getPerspectiva
};