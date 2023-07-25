const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    idade: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String },
    logradouro: {
        rua: { type: String },
        numero: { type: Number },
        cidade: { type: String },
        estado: { type: String },
        pais: { type: String }
    },
    telefone: { type: Number },
});

const Usuario = mongoose.model("usuario",usuarioSchema);

module.exports = Usuario;