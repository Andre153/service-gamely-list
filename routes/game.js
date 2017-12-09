const express = require('express');
const router = express.Router();
const Game = require('../models/game');
const gameHandler = require('../handler/GameHandler');

router.get('/process', (req, res, next) => {

});

router.post('/add', gameHandler.create);
router.get('/process/ps4', gameHandler.processAndCreateFromFile);

module.exports = router;
