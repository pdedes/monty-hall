var montyHall = function (rounds) {
	var stayWins = 0;
	var switchWins = 0;
	var doors = [];
	var player = [];

	var chooseDoor = function () {
		return Math.floor(Math.random()*3) + 1;
	}

	// var revealDoor = function () {

	// }

	for (var i = 0; i < rounds; i++) {
		

		doors[chooseDoor()] = "prize";
		player[chooseDoor()] = "choice";
		//one non-prize door is revealed
		//user makes choice to stay or switch
		//game result counted
	}

	console.log(doors);
	console.log(player);

}

