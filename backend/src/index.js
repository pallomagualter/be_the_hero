const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // o ./ é para indicar o caminho relativo  já que não é um pacote

const app = express();

app.use(cors());
app.use(express.json()); //É importate que venha acima da aplicação já que o JavaScrip é Top-Down e ela deve ser executada antes das demais
app.use(routes); //Como a leitura é feita top-dowm é muito importante que venha abaixo do use express

app.listen(3333);