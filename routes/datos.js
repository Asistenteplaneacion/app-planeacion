const express = require('express');
const router = express.Router();
const objetivoEstrategicoController = require('../controllers/objetivoEstrategicoController')
const politicaController = require('../controllers/politicaController')
const programaController = require('../controllers/programaController')
const proyectoController = require('../controllers/proyectoController')
const componenteController = require('../controllers/componenteController')
const responsableComponenteController = require('../controllers/responsableComponenteController')

const saveDataController = require('../controllers/saveData')



const app = express()

app.get('/objetivo', objetivoEstrategicoController.objetivo)
app.get('/politica', politicaController.politica)
app.get('/programa', programaController.programa)
app.get('/proyecto', proyectoController.proyecto)
app.get('/componente', componenteController.componente)
app.get('/responsableComponente', responsableComponenteController.responsableComponente)


app.get('/saveData', saveDataController.SaveData)


app.post('/saveData', saveDataController.SaveData)




// router.get('/', ejeEstrategiController.getEje)



module.exports = app

module.exports = router