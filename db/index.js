const mongoose = require('mongoose');
                                           // por defecto ya lo busca, no hace falta colocar la extension .js

const dbConnect = (app) =>{
    mongoose.connect(                                                                           // este "stock-app" es el nombre de la base datos que se creara en MongoDB Atlas
    `mongodb+srv://apoyoplaneacion:${process.env.MONGO_DB_PASS}@app-planeacion.mxksqyb.mongodb.net/planeacion-data?retryWrites=true&w=majority&appName=app-planeacion`
    )
    .then(( ) => {
        const PORT = process.env.PORT

        app.listen(PORT, () => {
            console.log(`Servidor escuchando puerto: ${PORT}`)
        })
        console.log('Conexión exitosa a la BBDD')

        // Product.updateMany({}, { $set: { deleted: false } }).then((res) =>   //para saber cuantos elementos se eliminaron de la base de datos
        //     console.log({ res }))
    })
    .catch((err) => console.log(err))
}

module.exports = dbConnect

// console.log({ module })   // "module" palabra reservada

