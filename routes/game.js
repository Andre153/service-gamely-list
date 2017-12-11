const express = require('express');
const router = express.Router();
const gameHandler = require('../handler/GameHandler');

router.get('/process', (req, res, next) => {

});

router.post('/add',  async(req, res, next) => {gameHandler.create(req, res)});
router.get('/process/ps4', async(req, res, next) => {
    gameHandler.processAndCreateFromFileInitial(res, res, 'PS4')
});
router.get('/process/ps3', async(req, res, next) => {
    gameHandler.processAndCreateFromFileInitial(res, res, 'PS3')
});
router.get('/process/ps2', async(req, res, next) => {
    gameHandler.processAndCreateFromFileInitial(res, res, 'PS2')
});
router.get('/process/ps1', async(req, res, next) => {
    gameHandler.processAndCreateFromFileInitial(res, res, 'PS1')
});
router.get('/process/xbox360', async(req, res, next) => {
    gameHandler.processAndCreateFromFileInitial(res, res, 'XBOX')
});

module.exports = router;
