// Set the name, choice and stores the points each player scores
class Player {
    //Set the initial points of each player to be zero
    constructor(name, points = 0) {
        this.name = name;
        this.choice;
        this.points = points;
    };

    //When the player selects rock, paper or scissors set this as the players choice
    setChoice(choice) {
        this.choice = choice;
    };

    //When the player wins a round they get a point
    winner() {
        this.points += 1;
    };

    //If no one wins, no one gets a point
    noWinner() {
        this.points;
    }
};

export default Player;