const express = require('express')
//DESACOPLANDO O MODULO ROUTES DA FUNCAO EXPRESS
const routes = express.Router();

const ongController = require('./controllers/ongController')
const incidentsController = require('./controllers/incidentsController')
const profilleController = require('./controllers/profilleController')
const sessionController = require('./controllers/sessionController')

/*
*Metodo GET: usado pra buscar uma informcao no back-end, exemplo dados de usuarios
*Metodo POST: usado pra criar uma informacao no back-end, exemplo criar um usuario
*Metodo PUT: usado pra alterar uma informacao no back-end
*Metodo DELETE: usado pra deletar uma informaca o no back-end
*
*/
routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.post('/session', sessionController.create)
routes.get('/profile', profilleController.index)

routes.post('/incidents',  incidentsController.create)
routes.get('/incidents', incidentsController.index)
routes.delete('/incidents/:id', incidentsController.delete)


module.exports = routes;//Exportando as rotas para ficarem visiveis em outras paginas