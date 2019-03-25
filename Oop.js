// We have this code from Adding Methods With Closures lecture: 
// Refactor the code as an MakeGame class that shares its methods across different instances.


function randInt(n) {
    return Math.floor(Math.random() * (n + 1));
}

function makeGame(upperbound){

	var games = {};

  games.counter = 0;
	games.upper = upperbound;
  games.rand = randInt(games.upper);
	games.guessMyNumber = guessMyNumber;
	games.giveUp = giveUp;
	games.numOfGuesses = numOfGuesses;

	return games;
}

var guessMyNumber = function(n) {
	this.counter++;
	if (n > this.upper) {
		return "Out of bounds! Please try a number between 0 and " + upperbound + ".";
	} else if (n === this.rand) {
		return "You guessed my number!";
	}
	return "Nope! That wasn't it!";
}

var giveUp =function() {
	return this.rand;
}

var numOfGuesses = function() {
	return this.counter;
}





















