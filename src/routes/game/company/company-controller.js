const { to } = require('await-to-js');

const controller = {
    getAllCompanies: async function(companyRepository) {
        const [err, companies] = await to(companyRepository.getAllCompanies());
        if(err) {
            return err;
        }

        return companies;
    }
};

module.exports = controller;