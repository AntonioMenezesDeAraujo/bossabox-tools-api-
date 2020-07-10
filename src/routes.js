const express = require('express');

const ToolController = require('./controllers/ToolController');

const routes = express.Router();

routes.post('/tools', ToolController.store);
routes.get('/tools', ToolController.index);
routes.get('/tools',ToolController.findByTag)
routes.delete('/tools/:id',ToolController.remove)

module.exports = routes;