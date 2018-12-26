const express = require('express');
const app = express();
const database = require('./database/connector');
const worldsRoute = require('./routes/game/worlds/worlds-route');

worldsRoute(app);

const port = process.env.PORT || 5000;
app.listen(port);