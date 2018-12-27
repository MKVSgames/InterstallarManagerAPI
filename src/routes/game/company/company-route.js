const { Router } = require('express');
const controller = require('./company-controller');

const attach = (app, companyRepository) => {
    const router = new Router();
    router
        .get('/', async (req, res) => {
            const companies = await controller.getAllCompanies(companyRepository);
            res.send(companies);
        });
    
    app.use('/companies', router);
};

module.exports = attach;