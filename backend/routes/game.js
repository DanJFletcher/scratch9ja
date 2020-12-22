const express = require('express');
const router = express.Router();
const gameController = require("../controller/game.controller");
const multerInstance = require('./multer')


router.post("/game", multerInstance.single('image'),
gameController.createGame
)

router.get("/game", gameController.getGames);

router.get("/game/:id", gameController.getGameById);

router.delete("/game/:id", gameController.removeGame);


module.exports = router