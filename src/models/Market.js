class Market {
    constructor(rockets) {
        if(!rockets) {
            rockets = [];
        } else {
            this.rockets = rockets;
        }
    }
}

module.exports = Market;