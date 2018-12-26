const { Router } = require('express');
const controller = require('./worlds-controller');

const attach = (app) => {
    const router = new Router();
    router
        .get('/', (req, res) => {
            controller.getAllWorlds(res);
        });
    app.use('/worlds', router);
};

module.exports = attach;