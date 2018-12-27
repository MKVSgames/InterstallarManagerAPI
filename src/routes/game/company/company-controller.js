const controller = {
    getAllCompanies: async function(companyRepository) {
        const companies = await companyRepository.getAllCompanies();
        return companies;
    }
};

module.exports = controller;