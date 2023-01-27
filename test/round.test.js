//Import necessary modules
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import { describe } from 'node:test';
import app from '../app.js';
import Game from '../src/game.js'
chai.use(chaiHttp);

//Testing suite for the round page
describe('Testing suite for round', () => {

    let game = new Game();
    let playerNames = ['Sarah', 'Alan'];
    game.setup(playerNames);

    it('The get request for the round page works', async () => {
        const result = await chai.request(app)
            .get(`/round`);
        expect(result).to.have.status(200);
    });

    it('The post request for the round page works', async () => {
        const result = await chai.request(app)
            .post(`/round`);
        expect(result).to.have.status(200);
    });

});