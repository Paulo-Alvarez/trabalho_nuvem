const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Bem-vindo à página inicial novamente! V2</h1>");
});

app.get("/sobre", function(req, res) {
    res.send("<h1>Sobre nós</h1><p>Informações sobre a aplicação.</p>");
});

app.get("/contato", function(req, res) {
    res.send("<h1>Contato</h1><p>Entre em contato conosco pelo email paulo@dominio.com.</p>");
});

app.listen(5000, function (erro) {
    if (erro) {
        console.error("Erro ao iniciar o servidor:", erro.message);
    } else {
        console.log("Servidor iniciado em http://localhost:5000");
    }
});