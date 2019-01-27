class Company {
    constructor(name, budget, marketValue, rockets) {
        this.name = name;
        this.budget = budget;
        this.marketValue = marketValue;
        if(!this.rockets) {
            this.rockets = [];
        } else {
            this.rockets = rockets;
        }
    }
}

module.exports = Company;