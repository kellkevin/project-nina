/*


*/

enchant();
var char = {};

var char = function(strNme){
	/*
	this.hp = 10; 
	this.atk = 20;
	this.def = 20;
	*/
	with(this){
		hp = 10;
	 	mp = 10;
		might = 10;
		stamina = 10;
		def = 6;
		speed = 10;
		intel = 10;
		will = 10;
		chance = 10;
		movement = 10;
		nme = strNme;
	}
	// Gear
	with(this){
		head = "";
		rhand = "";
		lhand = "";
		body = "";
		feet = "";
		acc1 = "";
		acc2 = "";
	}

	console.log(this.nme + " was created!");
}

/*
createSoldier = function (strNme){
	this = char(strNme);
	this.attack = function(victim){
		var = this.might - [victim].def;
	}
}
*/

window.onload = function(){
		console.log("Start the system");
		var numW, numH, game; 
		numW = 500;
		numH = 500;
		game = new Game(numW,numH);
	
		game.fps = 20;
		game.onload = function (){
		alert("To Battle!");
	}
	game.start();	
};

