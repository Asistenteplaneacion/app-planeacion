const express = require('express');
const router = express.Router();
const objetivoEstrategicoController = require('../controllers/objetivoEstrategicoController')
const politicaController = require('../controllers/politicaController')
const saveDataController = require('../controllers/saveData')


const app = express()

app.get('/objetivo', objetivoEstrategicoController.objetivo)
app.get('/politica', politicaController.politica)
app.post('/saveData', saveDataController.SaveData)


// router.get('/', ejeEstrategiController.getEje)



module.exports = app

module.exports = router