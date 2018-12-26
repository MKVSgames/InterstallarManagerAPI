const { Router } = require('express');
const controller = require('./worlds-controller');

const attach = (app, worldRepository) => {
    const router = new Router();
    router
        .get('/', (req, res) => {
            controller.getAllWorlds(res, worldRepository);
        })
        .get('/addworld', (req, res) => {
            controller.addWorld(res, worldRepository);
        });
    app.use('/worlds', router);
};

module.exports = attach;