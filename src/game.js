//Import player class
import Player from './player.js';
class Game {

    //This setup is used from eds battle code demo
    setup(names, playerClass = Player) {
        this.players = names.map(name => new playerClass(name));
    };

    //Set the player who choses first and second
    currentPlayer() {
        return this.players[0];
    };

    otherPlayer() {
        return this.players[1];
    };

    //Switch who gets to go first after each round
    switchPlayers() {
        this.players.reverse();
    };

    //For every combination set who would be the winner, if they pick the same there is no winner
    winRound() {
        if (this.currentPlayer().choice === 'Scissors' && this.otherPlayer().choice === 'Scissors') {
            return this.currentPlayer().noWinner()
        } else if (this.currentPlayer().choice === 'Rock' && this.otherPlayer().choice === 'Rock') {
            return this.currentPlayer().noWinner()
        } else if (this.currentPlayer().choice === 'Paper' && this.otherPlayer().choice === 'Paper') {
            return this.currentPlayer().noWinner()
        } else if (this.currentPlayer().choice === 'Rock' && this.otherPlayer().choice === 'Scissors') {
            return this.currentPlayer().winner()
        } else if (this.currentPlayer().choice === 'Paper' && this.otherPlayer().choice === 'Rock') {
            return this.currentPlayer().winner()
        } else if (this.currentPlayer().choice === 'Scissors' && this.otherPlayer().choice === 'Paper') {
            return this.currentPlayer().winner()
        } else if (this.otherPlayer().choice === 'Rock' && this.currentPlayer().choice === 'Scissors') {
            return this.otherPlayer().winner()
        } else if (this.otherPlayer().choice === 'Paper' && this.currentPlayer().choice === 'Rock') {
            return this.otherPlayer().winner()
        } else if (this.otherPlayer().choice === 'Scissors' && this.currentPlayer().choice === 'Paper') {
            return this.otherPlayer().winner()
        };
    };
};

export default Game;