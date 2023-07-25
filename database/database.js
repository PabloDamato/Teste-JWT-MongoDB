const mongoose = require('mongoose');

function connectToDatabase() {
    mongoose.connect('mongodb://127.0.0.1:27017/crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MONGO DB CONECTADO COM SUCESSO!")
    }).catch((err) => {
        return console.log(`ERRO NA CONEXÃO COM O MONGODB: ${err}`)
    });
}

module.exports = connectToDatabase;