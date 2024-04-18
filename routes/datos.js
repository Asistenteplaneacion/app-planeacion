const express = require('express');
const router = express.Router();
const dataController = require('../controllers/datos')
const perspectivaController = require('../controllers/perspectivaController')


router.get('/', dataController.getMegas)
router.get('/', perspectivaController.getPerspectiva)



module.exports = router