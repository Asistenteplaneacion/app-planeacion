require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnect = require('./db/index')
const DataRouter = require('./routes/datos')
const objetivoEstrategicoController = require('./controllers/objetivoEstrategicoController')
const politicaController = require('./controllers/politicaController')
const saveDataController = require('./controllers/saveData')


// const path = require('path')


const app = express()

dbConnect(app)

app.use(cors())



app.use(express.json())


app.get('/objetivo', objetivoEstrategicoController.objetivo)
app.get('/politica', politicaController.politica)
app.post('/saveData', saveDataController.SaveData)


app.use('/api/v1/datas', DataRouter )

// console.log({ DataRouter })

// app.use(express.static(path.join(__dirname, 'public')))


// app.get('/', (req, res, next) => {
//     console.log('peticion recibida')


    // res.status(200).sendFile('index.html', { root: __dirname})  // dirname me coloca la ruta completa donde estoy
    
// })

// const PORT = process.env.PORT


// app.listen(PORT, ()=>{
//     console.log(`Servidor escuchando en el puerto ${PORT}`)
// })