const jwt = require('jsonwebtoken');

function verifyToken(request, response, segredo) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        return response.status(401).send({ message: "O token não foi informado!" });
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2) {
        return response.status(401).send({ message: "Token inválido!" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return response.status(401).send({ message: "Token malformatado!" });
    }

    jwt.verify(token, segredo, (error, decoded) => {
        if (error) {
            console.log(`Erro: ${error}`);
            return response.status(500).send({ message: "Erro interno, tente novamente" });
        }

        console.log(decoded);
        response.send(decoded);
    });
}

module.exports = verifyToken;