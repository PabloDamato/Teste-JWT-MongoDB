async function loginUser(request, response, authService, segredo) {
    try {
        const { email, senha } = request.body;
        const user = await authService.loginService(email);

        if (!user) {
            return response.status(400).send({ message: "Usuário não encontrado" });
        }

        if (senha !== user.senha) {
            return response.status(400).send({ message: "Senha inválida!" });
        }

        const token = authService.generateToken(user, segredo);
        response.send({ user, token });
    } catch (error) {
        console.log(`erro: ${error}`);
        response.status(500).send({ message: "Erro interno do servidor" });
    }
}

module.exports = loginUser;