const Perspectiva = require('../models/perspectivaModel')


const getPerspectiva = async (req, res) => {
    try {
        const perspectiva = await Perspectiva.aggregate([
            {
                $match: { deleted: false }
            },
            {
                $sort: { _id: -1 }
            },
            {
                $limit: 10
            },
            {
                $group: {
                    _id: '$_id',
                    perspectiva: { $first: '$perspectiva' }
                }
            },
            {
                $project: {
                    _id: '$_id',
                    perspectiva: '$perspectiva'
                }
            },
            {
                $sort: {
                    _id: -1
                }
            }
        ]);

        res.status(200).json({ ok: true, perspectiva });
    } catch (error) {
        res.status(500).json({ ok: false, error: error.message });
    }
}

module.exports = {
    getPerspectiva
};