const express = require('express');
const app = express();
const database = require('./database/connector');
const startRoute = require('./routes/start/start-route');
const worldsRoute = require('./routes/game/worlds/worlds-route');
const companyRoute = require('./routes/game/company/company-route');
const WorldRepository = require('./models/repositories/worldRepository');
const CompanyRepository = require('./models/repositories/companyRepository');

const worldRepository = new WorldRepository(database, 'worlds');
const companyRepository = new CompanyRepository(database, 'companies');

startRoute(app);
worldsRoute(app, worldRepository);
companyRoute(app, companyRepository);

const port = process.env.PORT || 5000;
app.listen(port);