//Import necessary modules
import express from 'express';


const app = express();
const port = 1777;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//Define the routes
import homeRoute from './routes/home.js';
import roundRoute from './routes/round.js';
import roundTwoRoute from './routes/roundTwo.js';
import endRoundRoute from './routes/endRound.js';

//Link url to routes
app.use('/', homeRoute);
app.use('/round', roundRoute);
app.use('/roundTwo', roundTwoRoute);
app.use('/endRound', endRoundRoute);


//Check the app is listening
const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

export default server;