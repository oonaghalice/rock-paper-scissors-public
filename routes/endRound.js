//Import all necessary modules
import express from 'express';
import Game from '../src/game.js';
const router = express.Router();

//Set up the post request and set the choice of the second player to their choice
//redirect to the get request
router.post('/', (req, res) => {
    const game = req.app.locals.game;
    const playerTwo = game.otherPlayer();
    const player = game.currentPlayer();
    playerTwo.setChoice(req.body.choice);
    res.redirect('/endRound');
});


//Use the winRound() to method to add the winners points
router.get('/', (req, res) => {
    const game = req.app.locals.game;
    const player = game.currentPlayer();
    const playerTwo = game.otherPlayer();
    game.winRound();

    //If a player has 5 points go to the end of game view
    if (player.points === 5) {
        res.render('../view/endGame.ejs', {
            winner: player,
            loser: playerTwo
        });
    } else if (playerTwo.points === 5) {
        res.render('../view/endGame.ejs', {
            winner: playerTwo,
            loser: player
        });
        //If neither player has 5 points display the current scors at the end of the round
    } else {
        res.render('../view/endRound.ejs', {
            currentPlayer: player,
            otherPlayer: playerTwo,
        });
    };

});

export default router;