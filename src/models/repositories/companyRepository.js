class CompanyRepository {
    constructor(database, collectionName) {
        this.database = database;
        this.collectionName = collectionName;
    }
    getAllCompanies() {
        return this.database.showAll(this.collectionName);
    }
}

module.exports = CompanyRepository;