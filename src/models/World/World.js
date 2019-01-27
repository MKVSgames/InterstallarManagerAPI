class World {
    constructor(name, postion, planets) {
        this.name = name;
        this.postion = postion;
        if(!planets) {
            this.planets = [];
        } else {
            this.planets = planets;
        }
    }
}

module.exports = World;