const Game = require('../models').Game;
const fs = require('fs');

module.exports = {
    create(req, res) {
        return Game.create({
            name: 'Age of Empires',
            category: 'Strategy',
            platform: 'PS$'
        })
            .then(game => res.status(201).send(game))
            .catch(err => res.status(400).send(err))
    },

    processAndCreateFromFile(req, res) {
        let rl = require('readline').createInterface({
            input: fs.createReadStream('ps4.csv')
        });

        rl.on('line', (line) => {
            let columns = [];
            columns = line.split('~');
            Game.create({
                name: columns[0],
                category: columns[1],
                platform: 'PS4'
            })

        });

        rl.on('close', () => {
            res.status(201).send("Done")
        });


    }
};