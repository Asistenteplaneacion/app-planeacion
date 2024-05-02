const express = require('express');
const router = express.Router();
const objetivoEstrategicoController = require('../controllers/objetivoEstrategicoController')
const politicaController = require('../controllers/politicaController')


const app = express()

app.get('/objetivo', objetivoEstrategicoController.objetivo)
app.get('/politica', politicaController.politica)


// router.get('/', ejeEstrategiController.getEje)



module.exports = app

module.exports = router