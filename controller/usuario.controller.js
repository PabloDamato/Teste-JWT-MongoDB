const Usuario = require("../model/usuario");

const findAll = async (request, response) => {
    response.status(200).send(await Usuario.find());
}

const find = async (request, response) => {
    const nome = request.params.nome;
    let found = false;

    response.status(200).send(await Usuario.find({nome}));
}

const createUsuario = async (request, response) => {
    const user = request.body;

    //valida se o corpo da mensagem está vazio
    if (Object.keys(user).length === 0) {
        return response.status(400).send({message: "O corpo da mensagem está vazio!"});
    }

    //valida se todos os campos foram informados, pois todos os campos são obrigatórios
    if(!user.nome){
        return response.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!user.sobrenome){
        return response.status(400).send({message: "O campo 'sobrenome' não foi encontrado!"});
    }

    if(!user.idade){
        return response.status(400).send({message: "O campo 'idade' não foi encontrado!"});
    }

    if(!user.email){
        return response.status(400).send({message: "O campo 'email' não foi encontrado!"});
    }

    if(!user.senha){
        return response.status(400).send({message: "O campo 'senha' não foi encontrado!"});
    }

    if(!user.logradouro.rua){
        return response.status(400).send({message: "O campo 'rua' não foi encontrado!"});
    }

    if(!user.logradouro.numero){
        return response.status(400).send({message: "O campo 'numero' não foi encontrado!"});
    }

    if(!user.logradouro.cidade){
        return response.status(400).send({message: "O campo 'cidade' não foi encontrado!"});
    }

    if(!user.logradouro.estado){
        return response.status(400).send({message: "O campo 'estado' não foi encontrado!"});
    }

    if(!user.logradouro.pais){
        return response.status(400).send({message: "O campo 'pais' não foi encontrado!"});
    }

    if(!user.telefone){
        return response.status(400).send({message: "O campo 'telefone' não foi encontrado!"});
    }

    return response.status(201).send(await Usuario.create(user));
}

const updateUsuario = async (request, response) => {
    const nome = request.params.nome;
    const user = request.body;

    //valida se o corpo da mensagem está vazio
    if (Object.keys(user).length === 0) {
        return response.status(400).send({message: "O corpo da mensagem está vazio!"});
    }

    //faz a busca pelo usuário passado como parâmetro
    const existingUsuario = await Usuario.findOne({ nome: nome });

    //valida se o usuário passado como parâmetro existe
    if (!existingUsuario) {
        return response.status(404).send({ message: "Usuário não encontrado!" });
    }

    //valida se todos os campos foram informados, pois todos os campos são obrigatórios
    if(!user.nome){
        return response.status(400).send({message: "O campo 'nome' não foi encontrado!"});
    }

    if(!user.sobrenome){
        return response.status(400).send({message: "O campo 'sobrenome' não foi encontrado!"});
    }

    if(!user.idade){
        return response.status(400).send({message: "O campo 'idade' não foi encontrado!"});
    }

    if(!user.email){
        return response.status(400).send({message: "O campo 'email' não foi encontrado!"});
    }

    if(!user.senha){
        return response.status(400).send({message: "O campo 'senha' não foi encontrado!"});
    }

    if(!user.logradouro.rua){
        return response.status(400).send({message: "O campo 'rua' não foi encontrado!"});
    }

    if(!user.logradouro.numero){
        return response.status(400).send({message: "O campo 'numero' não foi encontrado!"});
    }

    if(!user.logradouro.cidade){
        return response.status(400).send({message: "O campo 'cidade' não foi encontrado!"});
    }

    if(!user.logradouro.estado){
        return response.status(400).send({message: "O campo 'estado' não foi encontrado!"});
    }

    if(!user.logradouro.pais){
        return response.status(400).send({message: "O campo 'pais' não foi encontrado!"});
    }

    if(!user.telefone){
        return response.status(400).send({message: "O campo 'telefone' não foi encontrado!"});
    }

    // Atualiza os campos do usuário existente
    existingUsuario.nome = user.nome;
    existingUsuario.sobrenome = user.sobrenome;
    existingUsuario.idade = user.idade;
    existingUsuario.email = user.email;
    existingUsuario.senha = user.senha;
    existingUsuario.logradouro.rua = user.logradouro.rua;
    existingUsuario.logradouro.numero = user.logradouro.numero;
    existingUsuario.logradouro.cidade = user.logradouro.cidade;
    existingUsuario.logradouro.estado = user.logradouro.estado;
    existingUsuario.logradouro.pais = user.logradouro.pais;
    existingUsuario.telefone = user.telefone;

    try {
        // Salva as alterações no banco de dados
        const updatedUsuario = await existingUsuario.save();
        return response.status(200).send(updatedUsuario);
    } catch (error) {
        //caso houver erro, o mesmo é mostrado no console e uma msg é exibida para o usuário
        console.log(`erro: ${error}`);
        return response.status(500).send({ message: "Erro ao atualizar o usuário." });
    }
}

const deleteUsuario = async (request, response) => {
    const nome = request.params.nome;
    try {
        // Encontra e deleta o usuário pelo nome
        const deletedUsuario = await Usuario.findOneAndDelete({ nome: nome });

        if (!deletedUsuario) {
            return response.status(404).send({ message: "Usuário não encontrado!" });
        }

        return response.status(200).send({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
        //caso houver erro, o mesmo é mostrado no console e uma msg é exibida para o usuário
        console.log(`erro: ${error}`);
        return response.status(500).send({ message: "Erro ao deletar o usuário." });
    }
}

module.exports = {
    findAll,
    find,
    createUsuario,
    updateUsuario,
    deleteUsuario
}