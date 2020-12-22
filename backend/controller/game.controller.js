const gameRepository = require("../routes/repository");

exports.createGame = async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      gameIsNew: req.body.gameIsNew,
      topPrice: req.body.topPrice,
      isVerOrient: req.body.IsVerOrient,
      description: req.body.description,
      image: req.file.filename,
    };

    let eachGame = await gameRepository.createGame({
      ...payload,
    });
    
    res.status(200).json({
      status: true,
      data: eachGame,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};

exports.getGames = async (req, res) => {
  try {
    let games = await gameRepository.games();
    res.status(200).json({
      status: true,
      data: games,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};

exports.getGameById = async (req, res) => {
  try {
    let id = req.params.id;
    let gameDetails = await gameRepository.gameById(id);
    req.req.status(200).json({
      status: true,
      data: gameDetails,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};

exports.removeGame = async (req, res) => {
  try {
    let id = req.params.id;
    let gameDetails = await gameRepository.removeGame(id);
    res.status(200).json({
      status: true,
      data: gameDetails,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      data: err,
    });
  }
};
