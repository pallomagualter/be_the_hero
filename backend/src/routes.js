const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const sessionContoller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', sessionContoller.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/Incidents', IncidentController.create);
routes.get('/Incidents', IncidentController.index);
routes.delete('/Incidents/:id', IncidentController.delete);

module.exports = routes; //responsável por deixar nossas rotas disponíveis através da exportação. 