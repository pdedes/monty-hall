function MontyHall () {
	this.door = undefined;		//Will hold 1, 2, or 3 signifying a placeholder for the prize
	this.player = undefined;	//Will hold 1, 2, or 3 signifying the player's current choice
	this.reveal = undefined;
}

MontyHall.prototype.chooseDoor = function () {
	return Math.floor(Math.random()*3) + 1;
}

//This function plays the aggressive strategy. The do/while loop ensures that the player's choice is changed.
MontyHall.prototype.switch = function (door, player, reveal) {
	var original = player;

	//The player will have to pick a door that is neither the one he is currently on, nor the door revealed
	do {
		player = this.chooseDoor();
	} while (player === reveal || player === original);

	return (player === door) ? true : false;
}

//This prototype function plays the conservative strategy
MontyHall.prototype.stay = function (door, player) {
	return (player === door) ? true : false;
}

var runSimulation = function (rounds) {
	var stayWins = 0;
	var switchWins = 0;

	for (var i = 0; i < rounds; i++) {
		var gameInstance = new MontyHall();

		gameInstance.door = gameInstance.chooseDoor();
		gameInstance.player = gameInstance.chooseDoor();

		do {
			gameInstance.reveal = gameInstance.chooseDoor();
		} while (gameInstance.reveal === gameInstance.door || gameInstance.reveal === gameInstance.player);

		// Console logging for debugging purposes
		// console.log("door value:   " + gameInstance.door);
		// console.log("player value: " + gameInstance.player);
		// console.log("monty reveal: " + gameInstance.reveal);
		
		if (gameInstance.stay(gameInstance.door, gameInstance.player)) {stayWins++;}
		if (gameInstance.switch(gameInstance.door, gameInstance.player, gameInstance.reveal)) {switchWins++;}
		// console.log("---");

	}

	//Probability is calculated using the wins divided by the number of rounds
	console.log("P(Never Switching)  = " + stayWins/rounds);
	console.log("P(Always Switching) = " + switchWins/rounds);
}