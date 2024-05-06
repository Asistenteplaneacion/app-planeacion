const SaveData = require('../models/saveData');

exports.SaveData = async (req, res) => {
    const { method, body } = req;
    const data = body;

    switch (method) {
        case 'GET':
            try {
                const resultado = await SaveData.find();
                return res.status(200).json(resultado);
            } catch (err) {
                return res.status(400).json({ error: err });
            }

        case 'POST':
            if (data) {
                try {
                    console.log('Datos recibidos en el controlador:', data); // Registro para verificar si los datos están llegando correctamente al controlador
                    const newData = new SaveData(data); // Crear un nuevo objeto SaveData con los datos recibidos
                    await newData.save(); // Guardar el nuevo objeto en la base de datos
                    console.log('Datos guardados en la base de datos:', newData); // Registro para verificar si los datos se están guardando correctamente en la base de datos
                    return res.status(200).json(newData); // Devolver los datos guardados con estado 200
                } catch (err) {
                    console.error('Error al guardar los datos en la base de datos:', err); // Registro de error si algo sale mal al guardar los datos en la base de datos
                    return res.status(400).json({ error: err.message }); // Devolver un estado 400 con el mensaje de error si algo sale mal
                }
            } else {
                return res.status(400).json({ message: 'Validation failed' }); // Devolver un estado 400 si no se proporcionan datos en la solicitud
            }

        default:
            return res.status(500).json({ error: 'Method not allowed' });
    }
};


















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
    
//     case 'POST':
    //         if(data){
    //             try {
    //                 const resultado = await SaveData.find()
    //                 return res.status(200).json(resultado)
    //             } catch (err) {
    //                 return res.status(400).json({ error: err  })
    //             }
    //         }else{
    //             return res.status(400).json({ message: validationFailed  })
    //         }
    
    //     default:
    //         return res.status(500).json({ error: 'method not allowed'  })
    // }