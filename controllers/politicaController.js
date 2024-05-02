const Politica = require('../models/politicaModel')

exports.politica = async (req, res) => {
    const { method, body } = req
    const data1 = body;

    switch (method) {
        case 'GET':
            try {
                const resultado1 = await Politica.find()
                return res.status(200).json(resultado1)
            } catch (err) {
                return res.status(400).json({ error: err  })
            }

        case 'POST':
            if(data1){
                try {
                    const resultado1 = await Politica.find()
                    return res.status(200).json(resultado1)
                } catch (err) {
                    return res.status(400).json({ error: err  })
                }
            }else{
                return res.status(400).json({ message: validationFailed  })
            }
    
        default:
            return res.status(500).json({ error: 'method not allowed'  })
    }
}














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