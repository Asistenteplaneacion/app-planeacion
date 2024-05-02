// const Perspectiva = require('../models/perspectivaModel')


// exports.perspectiva = async (req, res) => {
//     const { method, body } = req
//     const data = body;

//     switch (method) {
//         case 'GET':
//             try {
//                 const resultado = await Perspectiva.find()
//                 return res.status(200).json(resultado)
//             } catch (err) {
//                 return res.status(400).json({ error: err  })
//             }

//         case 'POST':
//             if(data){
//                 try {
//                     const resultado = await Perspectiva.find()
//                     return res.status(200).json(resultado)
//                 } catch (err) {
//                     return res.status(400).json({ error: err  })
//                 }
//             }else{
//                 return res.status(400).json({ message: validationFailed  })
//             }
    
//         default:
//             return res.status(500).json({ error: 'method not allowed'  }) 
//     }
// }














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
//                 foreignField: 'data1',
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

// const getPerspectiva = async () => {
//     const perspectiva = await Perspectiva.aggregate(  // (1) Padre --- (Categories)
//         [
//             {
//                 $lookup:
//                 {
//                     from: "megas", // (2) Hijo -- (Publicaciones)
//                     let:{
//                         aliasNombreMega: "$nombre" // (1) Nombre de la categoria [ Tech, Salud]   
//                     },
//                     pipeline: [ // (2)  publicaciones
//                         {
//                             $match:{
//                                 $expr:{
//                                     $in: [ "$$aliasNombreMega", "$megas",]
//                                 }
//                             }
//                         }
//                     ],
//                     as: 'listaDeMegasEncontradas'
//                 }
//             }
//         ]
//     )
//     console.log('******** RESULTADOS ******', JSON.stringify(perspectiva));
// }

// module.exports = {
//     getPerspectiva
// };


