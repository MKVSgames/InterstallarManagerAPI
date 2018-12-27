const { Router } = require('express');
const controller = require('./worlds-controller');

const attach = async (app, worldRepository) => {
    const router = new Router();
    router
        .get('/', (req, res) => {
            const words = await controller.getAllWorlds(worldRepository);
            res.send(words);
        })
        .get('/addworld', (req, res) => {
            const words = await controller.addWorld(worldRepository);
            res.send(words);
        });
    app.use('/worlds', router);
};

module.exports = attach;