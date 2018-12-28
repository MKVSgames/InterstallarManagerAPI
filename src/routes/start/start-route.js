const { Router } = require('express');
const controller = require('./start-controller');

const attach = (app) => {
    const router = new Router();
    router
        .get('/', (req, res) => {
            controller.showHome(res);
        });

    app.use('/', router);
};

module.exports = attach;