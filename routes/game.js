const express = require('express');
const router = express.Router();
const gameHandler = require('../handler/GameHandler');


router.post('/add',  async(req, res, next) => {gameHandler.create(req, res)});
//PLAYSTATION
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


//XBOX
router.get('/process/xboxone', async(req, res, next) => {
    gameHandler.processAndCreateFromFileInitial(res, res, 'XBOXONE')
});

router.get('/process/xbox360', async(req, res, next) => {
    gameHandler.processAndCreateFromFileInitial(res, res, 'XBOX360')
});

router.get('/category/:category', async(req, res, next) => {

});

router.get('/platform/:platform', async(req, res, next) => {

});

router.get('/platform/:platform/key/:key', async(req, res, next) => {
    gameHandler.findGameByKeyword(req, res)
});

router.get('/all', async( req, res, next) => {
    gameHandler.findAllGames(res)
});

module.exports = router;
