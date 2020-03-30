const express = require('express')//importa as funcionalidades do pacote express instalado anteriormente
const routes = require('./routes') //importando o routes.js
const cors = require('cors')
//variavel app armazena a aplicacao
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)




app.listen(3333) //ligando a aplicacao a porta 3333, assim pode ser acessada como localhost:3333
