const express = require('express');
const router = express.Router();
const dataController = require('../controllers/datos')
const perspectivaController = require('../controllers/perspectivaController')
const ejeEstrategiController = require('../controllers/ejeEstrategicoController')

const app = express()

app.get('/megas', dataController.megas)
app.get('/perspectiva', perspectivaController.perspectiva)
// router.get('/', ejeEstrategiController.getEje)



module.exports = app

module.exports = router