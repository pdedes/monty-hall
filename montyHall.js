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
		doors[chooseDoor()] = true;
		player[chooseDoor()] = true;
		var j = 0;

		while( j < 3 ){
			if (doors[j] && player[j]) {
				console.log(doors[j]);
				console.log(player[j]);
				console.log("winner!");
			}
			j++;
		}
		//one non-prize door is revealed
		//user makes choice to stay or switch
		//game result counted
	}

}

