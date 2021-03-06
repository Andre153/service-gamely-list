const Game = require('../models').Game;
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const uuid = require('uuid/v4');

module.exports = {

    async findAllGames(res) {
        await Game.findAll()
            .then(games => res.status(200).send(games))
            .catch(err => res.status(400).send(err))
    },

    async findGamesByCategory(req, res) {
        const category = req.param('category');
        await Game.findAll({ where: {category: category}})
            .then(categories => {
                res
                res.status(200).send(categories)
            })
            .catch(err => res.status(400).send(err))
    },

    async findAllCategories(res) {
        await Game.findAll({ attributes: ['categories'], raw: true})
            .then(categories => res.status(201).send(categories))
            .catch(err => res.status(400).send(err))
    },

    async findGameByKeyword(req, res) {
        const keyword = req.param('key');
        const platform = req.param('platform');
        if (platform === 'XBOX360') this.findXBOX360Games(keyword).then(games => res.status(200).send(games))
                .catch(err => res.status(400).send(err));

        if (platform === 'XBOXONE') this.findXBOXONEGames(keyword).then(games => res.status(200).send(games))
            .catch(err => res.status(400).send(err));

        if (platform === 'PS4') this.findPS4Games(keyword).then(games => res.status(200).send(games))
            .catch(err => res.status(400).send(err));

        if (platform === 'PS3') this.findPS3Games(keyword).then(games => res.status(200).send(games))
            .catch(err => res.status(400).send(err));

    },

    async findPS3Games(keyword) {
        return Game.findAll({
            where: {
                name: { [Op.iLike]: `${keyword}%`},
                ps3Supported: true
            },
            raw: true,
            limit: 5
        })
    },

    async findPS4Games(keyword) {
        return Game.findAll({
            where: {
                name: { [Op.iLike]: `${keyword}%`},
                ps4Supported: true
            },
            raw: true,
            limit: 5
        })
    },

    async findXBOXONEGames(keyword) {
        return Game.findAll({
            where: {
                name: { [Op.iLike]: `${keyword}%`},
                xboxoneSupported: true
            },
            raw: true,
            limit: 5
        })
    },

    async findXBOX360Games(keyword) {
        return Game.findAll({
            where: {
                name: { [Op.iLike]: `${keyword}%`},
                xbox360Supportedb: true
            },
            raw: true,
            limit: 5
        })
    },

    async create(req, res) {
        const game = req.body;
        console.log('Awaiting the promise .... ');
        let resolve =  await Game.findAll({attributes: ['name'], raw: true});
        console.log('Promise has been resolved');
        this.addGame(game.name, game.category, game.platform, resolve)
            .then(game => res.status(201).send(game))
            .catch(err => res.status(400).send(err))
    },

    //Initial migrations
    async processAndCreateFromFileInitial(req, res, platform) {

        let games = await Game.findAll({attributes: ['name'], raw: true});

        let rl = require('readline').createInterface({
            input: fs.createReadStream(`${platform}.csv`)
        });

        rl.on('line', (line) => {
            let columns = line.split('~');
            this.addGame(columns[0], columns[1], platform, games)
        });

        rl.on('close', () => {
            res.status(201).send("Done")
        });
    },

    addGame(name, category, platform, gamesList) {
        return new Promise((resolve, reject) => {
            console.log(`Adding the game ${name}`);
            let gameMap = gamesList.map(game => game.name.toLowerCase());
            if (gameMap.includes(name.toLowerCase())) {
                console.log(`The Game ${name} does exist. Therefore adding platform support for ${platform}`);
                Game.update(this.buildUpdateData(platform), {where: {name: name}})
                    .then(game => resolve(game))
                    .catch(err => reject(err))
            } else {
                console.log('Needs to be created');
                Game.create({
                    name: name,
                    uuid: uuid(),
                    category: category,
                    ps4Supported: platform === 'PS4',
                    ps3Supported: platform === 'PS3',
                    ps2Supported: platform === 'PS2',
                    ps1Supported: platform === 'PS1',
                    xboxoneSupported: platform === 'XBOXONE',
                    xbox360Supported: platform === 'XBOX360',
                    wiiSupported: platform === 'WII',
                })
                    .then(game => resolve(game))
                    .catch(err => reject(err))
            }
        })
    },

    buildUpdateData(platform) {
        let updateData = null;
        if (platform === 'PS4') updateData = {ps4Supported: true};
        if (platform === 'PS3') updateData = {ps3Supported: true};
        if (platform === 'PS2') updateData = {ps2Supported: true};
        if (platform === 'PS1') updateData = {ps1Supported: true};
        if (platform === 'XBOX') updateData = {xboxSupported: true};
        if (platform === 'WII') updateData = {wiiSupported: true};
        return updateData
    }

};