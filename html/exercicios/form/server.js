const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use = bodyParser.urlencoded({ extended: true });
app.post('/usuarios', (req, resp) => {
    resp.send('<h1>PARABÉNS! Usuário incluído</h1>');
});

app.post('/usuarios/:id', (req, resp) => {
    resp.send('<h1>PARABÉNS! Usuário alterado</h1>');
});

app.listen(3003);