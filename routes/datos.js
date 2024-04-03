const express = require('express');
const router = express.Router();
const dataController = require('../controllers/datos')


router.get('/', dataController.getDatas)


module.exports = router