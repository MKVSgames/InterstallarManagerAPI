const controller = {
    getAllWorlds: async function(res, worldRepository) {
        const worlds = await worldRepository.getAllWorlds();
        res.send(worlds);
    },

    addWorld: async function(res, worldRepository) {
        const worlds = await worldRepository.addWorld({name: 'new world'});
        res.send(worlds);
    }
};

module.exports = controller;