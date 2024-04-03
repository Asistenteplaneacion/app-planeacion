const Data = require('../models/datos')


const getDatas = async (req, res) => {
    // const products = await Product.aggregate({ deleted: false }).sort({_id: -1})  // peticion a la base de datos asyncrona
    
    const datas = await Data.aggregate([
        {
            $match: { deleted: false},
        },
    
        {
            $sort: { _id: -1},
        },

        {
            $limit: 10,
        },

        {
            $lookup: {
                from: 'movements',
                localField: '_id',
                foreignField: 'product',
                as: 'movements'
            },
        },

        {
            $unwind: {
                path: '$movements',
                preserveNullAndEmptyArrays: true,
            },
        },

        {
            $group: {
                _id: {_id: '$_id', name: '$name', price: '$price'},
                stock: {
                    $sum: '$movements.quantity',
                }
            },
        },

        {
            $project: {
                _id: '$_id._id',
                name: '$_id.name',
                price: '$_id.price',
                stock: 1,
            },
        },
        {
            $sort: {
                stock: -1,
            }
        },
    ])


    res.status(200).json({ ok: true, datas })
}

module.exports = { 
    getDatas,
    
}