const express = require('express');
const app = express();
const database = require('./database/connector');
const worldsRoute = require('./routes/game/worlds/worlds-route');
const WorldRepository = require('./models/repositories/worldRepository');

const worldRepository = new WorldRepository(database, 'worlds');

worldsRoute(app, worldRepository);

const port = process.env.PORT || 5000;
app.listen(port);