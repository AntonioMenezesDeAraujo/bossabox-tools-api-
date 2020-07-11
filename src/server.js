const express = require('express');
const routes = require('./routes');

const app = express();

require('./database');

app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3000);