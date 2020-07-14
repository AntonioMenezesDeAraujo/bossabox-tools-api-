const express = require('express');

const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('../api/swagger/swagger');

const routes = require('./routes');

const app = express();

require('./database');

app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation))

app.listen(process.env.PORT || 3000);