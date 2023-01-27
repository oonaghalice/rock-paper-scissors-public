//Import necessary modules
import Player from "../src/player.js";
import { expect } from 'chai';
import { describe } from 'node:test';
import Game from "../src/game.js";

//All game class method tests
describe('Game class testing suite', () => {
    it('The game sets a current player', () => {
        let game = new Game();
        let name = ['Sarah', 'Alan'];
        game.setup(name)
        let result = game.currentPlayer();
        expect(result.name).to.be.eql('Sarah');
    });

    it('The game sets an other player', () => {
        let game = new Game();
        let name = ['Sarah', 'Alan'];
        game.setup(name)
        let result = game.otherPlayer()
        expect(result.name).to.be.eql('Alan');
    });

    it('The game switches players', () => {
        let game = new Game();
        let name = ['Sarah', 'Alan'];
        game.setup(name)
        game.switchPlayers();
        let result = game.currentPlayer();
        expect(result.name).to.be.eql('Alan');
    });

    it('The game gives the winner a point', () => {
        let game = new Game();
        let name = ['Sarah', 'Alan'];
        game.setup(name)
        game.currentPlayer().setChoice('Rock');
        game.otherPlayer().setChoice('Scissors');
        game.winRound()
        let result = game.currentPlayer().points;
        expect(result).to.be.eql(1);
    });
});