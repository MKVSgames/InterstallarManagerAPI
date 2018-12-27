const controller = {
    getAllWorlds: async function(worldRepository) {
        const worlds = await worldRepository.getAllWorlds();
        return worlds;
    },

    addWorld: async function(worldRepository) {
        const worlds = await worldRepository.addWorld({name: 'new world'});
        return worlds;
    }
};

module.exports = controller;