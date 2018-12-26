const express = require('express');
const app = express();
const connector = require('./database/connector');
const database = connector();
const worldsRoute = require('./routes/game/words/worlds-route');

worldsRoute(app);

const port = process.env.PORT || 5000;
app.listen(port);