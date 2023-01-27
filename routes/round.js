//Import all necessary modules
import express from 'express';
import Game from '../src/game.js';
const router = express.Router();

//Set up a new instance of game class with inputted player names
router.post('/', (req, res) => {
    const game = new Game();
    const playerNames = [req.body.player1, req.body.player2];
    game.setup(playerNames);
    req.app.locals.game = game;
    res.redirect('/round');
});

router.get('/', (req, res) => {
    const player = req.app.locals.game.currentPlayer();
    //Load the first round with the first player
    res.render('../view/round.ejs', {
        name: player.name,
        choice: player.choice,
        points: player.points
    });
});

export default router;