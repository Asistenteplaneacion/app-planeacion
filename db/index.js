const mongoose = require('mongoose');
                                           // por defecto ya lo busca, no hace falta colocar la extension .js

if(!process.env.MONGODB_URL){
    throw new Error('añadir url en .env')
}

async function main() {
    const url = process.env.MONGODB_URL || 'Error de conexión'
    await mongoose.connect(url)
}

const dbConnect =  (app) => {
    main()
    .then(( ) => {
        const PORT = process.env.PORT

        app.listen(PORT, () => {
            console.log(`Servidor escuchando puerto: ${PORT}`)
        })
        console.log('Conexión exitosa a la BBDD')

    })
    .catch((error)=> console.log(error))
}

module.exports = dbConnect

// const dbConnect = (app) =>{
//     mongoose.connect(process.env.MONGODB_URL)
    // .then(( ) => {
    //     const PORT = process.env.PORT

    //     app.listen(PORT, () => {
    //         console.log(`Servidor escuchando puerto: ${PORT}`)
    //     })
    //     console.log('Conexión exitosa a la BBDD')

    // })
//     .catch((err) => console.log(err))
// }



// console.log({ module })   // "module" palabra reservada

