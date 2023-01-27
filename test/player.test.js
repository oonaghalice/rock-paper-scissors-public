//Import necessary modules
import Player from "../src/player.js";
import { expect } from 'chai';
import { describe } from 'node:test';

//Testing all methods in player class
describe('Player class testing suite', () => {
    it('Players name is set correclty', () => {
        let player = new Player('Chris');
        let result = player.name;
        expect(result).to.be.eql('Chris');
    });

    it('The players choice is stored', () => {
        let player = new Player();
        player.setChoice('rock');
        let result = player.choice;
        expect(result).to.be.eql('rock');
    });

    it('The winner gets a point', () => {
        let player = new Player();
        player.winner();
        let result = player.points
        expect(result).to.be.eql(1);
    });
});