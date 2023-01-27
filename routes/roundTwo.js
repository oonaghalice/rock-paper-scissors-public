//Import all necessary modules
import express from 'express';
import Game from '../src/game.js';
const router = express.Router();

//Set the choice player one selected from round 1
router.post('/', (req, res) => {
    const game = req.app.locals.game;
    const player = game.currentPlayer();
    player.setChoice(req.body.choice);
    res.redirect('/roundTwo');
});

//Set up round two for the second player to make their choice
router.get('/', (req, res) => {
    const game = req.app.locals.game;
    const playerTwo = game.otherPlayer();
    res.render('../view/roundTwo.ejs', {
        name: playerTwo.name,
        choice: playerTwo.choice,
        points: playerTwo.points
    });
});

export default router;
