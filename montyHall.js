function MontyHall () {
	this.door = undefined;		//Will hold 1, 2, or 3 signifying a placeholder for the prize
	this.player = undefined;	//Will hold 1, 2, or 3 signifying the player's current choice
}

MontyHall.prototype.chooseDoor = function () {
	return Math.floor(Math.random()*3) + 1;
}

var runSimulation = function (rounds) {
	var switchWins = undefined;
	var stayWins = undefined;

	for (var i = 0; i < rounds; i++) {
		doors[chooseDoor()] = true;
		player[chooseDoor()] = true;
		var j = 0;

		while( j < 3 ){
			if (doors[j] && player[j]) {
				console.log("winner!");
			}
			j++;
		}
		//one non-prize door is revealed
		//user makes choice to stay or switch
		//game result counted
	}
}