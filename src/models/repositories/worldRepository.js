class WorldRepository {
    constructor(database, collectionName) {
        this.database = database;
        this.collectionName = collectionName;
    }
    getAllWorlds() {
        return this.database.showAll(this.collectionName);
    }

    addWorld(world) {
        return this.database.insert(this.collectionName, world);
    }
}

module.exports = WorldRepository;