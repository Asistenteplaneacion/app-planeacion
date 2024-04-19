const Megas = require('../models/megaModel')


// const getMegas = async (req, res) => {
//     try {
//         const datas = await Megas.aggregate([
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
//                     megas: { $first: '$megas' }
//                 }
//             },
//             {
//                 $project: {
//                     _id: '$_id',
//                     megas: '$megas'
//                 }
//             },
//             {
//                 $sort: {
//                     _id: -1
//                 }
//             }
//         ]);

//         res.status(200).json({ ok: true, datas });
//     } catch (error) {
//         res.status(500).json({ ok: false, error: error.message });
//     }
// }

const getMegas = async (req, res) => {
    const resultado = await Megas.aggregate(  // (1) Padre --- (Categories)
        [
            {
                $lookup:
                {
                    from: "perspectiva", // (2) Hijo -- (Publicaciones)
                    let:{
                        aliasNombreMega: "$nombre" // (1) Nombre de la categoria [ Tech, Salud]   
                    },
                    pipeline: [ // (2)  publicaciones
                        {
                            $match:{
                                $expr:{
                                    $in: [ "$$aliasNombreMega", "$Megas",]
                                }
                            }
                        }
                    ],
                    as: 'listaDePerspectivasEncontradas'
                }
            }
        ]
    )
    console.log('******** RESULTADOS ******', JSON.stringify(resultado));
}

module.exports = { getMegas }













// const getDatas = async (req, res) => {
//     // const products = await Product.aggregate({ deleted: false }).sort({_id: -1})  // peticion a la base de datos asyncrona
    
//     const datas = await Data.aggregate([
//         {
//             $match: { deleted: false},
//         },
    
//         {
//             $sort: { _id: -1},
//         },

//         {
//             $limit: 10,
//         },

//         {
//             $lookup: {
//                 from: 'datas',
//                 localField: '_id',
//                 foreignField: 'data',
//                 as: 'datas'
//             },
//         },

//         {
//             $unwind: {
//                 path: '$datas',
//                 preserveNullAndEmptyArrays: true,
//             },
//         },

//         {
//             $group: {
//                 _id: {_id: '$_id', mega: '$megas'},
//             },
//         },

//         {
//             $project: {
//                 _id: '$_id._id',
//                 mega: '$_id.megas',
//             },
//         },
//         {
//             $sort: {
//                 _id: -1,
                
//             }
//         },
//     ])


//     res.status(200).json({ ok: true, datas })
// }

// module.exports = { 
//     getDatas,
    
// }