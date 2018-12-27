const { to } = require('await-to-js');

const controller = {
    getAllWorlds: async function(worldRepository) {
        const [err, worlds] = await to(worldRepository.getAllWorlds());
        if(err) {
            return err;
        }

        return worlds;
    },

    addWorld: async function(worldRepository) {
        const [err, worlds] = await to(worldRepository.addWorld({name: 'new world'}));
        if(err) {
            return err;
        }

        return worlds;
    }
};

module.exports = controller;