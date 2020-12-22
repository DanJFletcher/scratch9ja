const Game = require("../models/gameModel");

exports.games = async () => {
    const games = await Game.find();
    return games;
}

exports.gameById = async id => {
    const game = await Game.findById(id);
    return game;
}

exports.createGame = async payload => {
    const newGame = await Game.create(payload);
    return newGame;
}

exports.removeGame = async id => {
    const game = await Game.findById(id);
    return game;
}