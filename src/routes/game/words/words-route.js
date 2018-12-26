const { Router } = require('express');
const controller = require('./words-controller');

const attach = (app) => {
    const router = new Router();
    router
        .get('/', (req, res) => {
            controller.getAllWords(res);
        });
    app.use('/words', router);
};

module.exports = attach;