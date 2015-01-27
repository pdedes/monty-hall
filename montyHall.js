function MontyHall () {
	this.door = undefined;		//Will hold 1, 2, or 3 signifying a placeholder for the prize
	this.player = undefined;	//Will hold 1, 2, or 3 signifying the player's current choice
	this.reveal = undefined;
}

MontyHall.prototype.chooseDoor = function () {
	return Math.floor(Math.random()*3) + 1;
}

var runSimulation = function (rounds) {
	var switchWins = undefined;
	var stayWins = undefined;

	for (var i = 0; i < rounds; i++) {
		var gameInstance = new MontyHall();

		gameInstance.door = gameInstance.chooseDoor();
		gameInstance.player = gameInstance.chooseDoor();

		do {
			gameInstance.reveal = gameInstance.chooseDoor();
		} while (gameInstance.reveal === gameInstance.door || gameInstance.reveal === gameInstance.player);

		console.log("door value:   " + gameInstance.door);
		console.log("player value: " + gameInstance.player);
		console.log("monty reveal: " + gameInstance.reveal);
		console.log("---");
		// if (gameInstance.door && gameInstance.player) {
		// 	console.log("winner!");
		// }
			
		//one non-prize door is revealed
		//user makes choice to stay or switch
		//game result counted
	}
}