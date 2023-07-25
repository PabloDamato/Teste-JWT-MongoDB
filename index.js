const express = require("express");
const app = express();
const usuario = require("./router/usuario.router.js");
const connectToDatabase = require("./database/database.js");
const authService = require("./service/auth.service.js");
const jwt = require("jsonwebtoken");
const port = 3000;
const segredo = "ksksksksks9989"
const loginUser = require("./service/login.js");
const verifyToken = require("./service/verifyToken.js");
connectToDatabase();

app.use(express.json());

app.use("/usuario", usuario);

app.post('/login', async (request, response) => {
    await loginUser(request, response, authService, segredo);
});

app.get('/teste-token', (request, response) => {
    verifyToken(request, response, segredo);
});

app.get("/", (request, response) => {
    response.send("home page!");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});