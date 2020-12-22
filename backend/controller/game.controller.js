const gameRepository = require("../routes/repository")



exports.createGame = async (req, res, next) => {
    
    try {
        // req.body.game = JSON.parse(req.body.game)
        const PORT = 8000;
        const hostname = req.hostname;
     const url = req.protocol + '://' + hostname + ':' + PORT + req.path;

        const payload = ({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            gameIsNew: req.body.gameIsNew,
            topPrice: req.body.topPrice,
            isVerOrient: req.body.IsVerOrient,
            description: req.body.description,
            image: url
        });          
        
        let eachGame = await gameRepository.createGame({
            ...payload
        });
      console.log(req.path )
        res.status(200).json({
            status: true,
            data: eachGame,
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getGames = async (req, res) => {
     
    try {
        let games = await gameRepository.games();
        res.status(200).json({
            status: true,
            data: games,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getGameById = async (req, res) => {

    try {
       let id = req.params.id
       let gameDetails = await gameRepository.gameById(id);
        req.req.status(200).json({
          status: true,
          data: gameDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}


exports.removeGame = async (req, res) => {

 try {
        let id = req.params.id
        let gameDetails = await gameRepository.removeGame(id)
        res.status(200).json({
            status: true,
            data: gameDetails,
        })
     } catch (err) {
            res.status(500).json({
            status: false,
            data: err
        })
    }
}