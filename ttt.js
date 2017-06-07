/**
 * This is a simple Tic Tac Toe game. Two players using the same computer will go
 * back and forth until a player gets a three in a row. This will be shown by making
 * the winning players' shapes turn green. Have fun!
 *
 * @author Asha Habib <ashatyreehabib@gmail.com>
 */
 

var isTurnCircle = true; winGame = false; boardArray = [];
//initial board array
boardArray.length = 9;

/**
 * OnClick, the player's shape will be drawn in their desired, free space on the board
 *
 * @param {Object} event_Id the element id of the canvas element
 */
function pressBox (event_Id) {
	//grab box number from event id
	var boxNum = event_Id.slice(-1);
	
	//If Player 1 picks an empty box, draw a circle
	if (isTurnCircle && isBoxEmpty(boxNum) && !winGame) {
		createCircle(event_Id);
		boardArray[boxNum] = "O";
		isTurnCircle = false;
		tttWin();
		return;
	}
	
	//If Player 2 picks an empty box, draw a cross
	if(!isTurnCircle && isBoxEmpty(boxNum) && !winGame) {
		createCross(event_Id);
		boardArray[boxNum] = "X";
		isTurnCircle = true;
		tttWin();
		return;
	}
	
	//the space is already occupied
	if(!isTurnCircle && !isBoxEmpty(boxNum)){
		return;
	}
}

/**
 * Tests if there is a win after each move. If there is, the makeGreenForWin funciton is invoked to display win. 
 *
 */
function tttWin() {
	//Test if there is a three in a row
	switch (true) {
		case boardArray[0] == boardArray[1] && boardArray[0] == boardArray[2] && boardArray[0] != undefined:
			makeGreenForWin(boardArray[0],[0,1,2]);
			winGame = true;
			break;
			
		case boardArray[3] == boardArray[4] && boardArray[3] == boardArray[5] && boardArray[3] != undefined:
			makeGreenForWin(boardArray[3],[3,4,5]);
			winGame = true;
			break;
			
		case boardArray[6] == boardArray[7] && boardArray[6] == boardArray[8] && boardArray[6] != undefined:
			makeGreenForWin(boardArray[6],[6,7,8]);
			winGame = true;
			break;
			
		case boardArray[0] == boardArray[3] && boardArray[0] == boardArray[6] && boardArray[0] != undefined:
			makeGreenForWin(boardArray[0],[0,3,6]);
			winGame = true;
			break;
			
		case boardArray[1] == boardArray[4] && boardArray[1] == boardArray[7] && boardArray[1] != undefined:
			makeGreenForWin(boardArray[1],[1,4,7]);
			winGame = true;
			break;
			
		case boardArray[2] == boardArray[5] && boardArray[2] == boardArray[8] && boardArray[2] != undefined:
			makeGreenForWin(boardArray[2],[2,5,8]);
			winGame = true;
			break;
			
		case boardArray[0] == boardArray[4] && boardArray[0] == boardArray[8] && boardArray[0] != undefined:
			makeGreenForWin(boardArray[0],[0,4,8]);
			winGame = true;
			break;
			
		case boardArray[2] == boardArray[4] && boardArray[2] == boardArray[6] && boardArray[2] != undefined:
			makeGreenForWin(boardArray[2],[2,4,6]);
			winGame = true;
			break;
		default:
			break;
	}
}

/**
 * Clears board and resets values
 *
 */
function pressReset(){
	for (var i = 0; i < boardArray.length; i++) {
		boardArray[i] = undefined;
		var event_Id = "box_"+i;
		var box_canvas = document.getElementById(event_Id);
		var box_context = box_canvas.getContext("2d");
		box_context.clearRect(0, 0, box_canvas.width, box_canvas.height);
	}
	isTurnCirlce = true;
	winGame = false;
}

/**
 * Draw a Circle in a canvas box
 *
 * @param {Object} event_Id the element id of the canvas element
 */
function createCircle(event_Id){
  var box_canvas = document.getElementById(event_Id);
  var box_context = box_canvas.getContext("2d");
  box_context.font="1100% Georgia";
  box_context.lineWidth = 3;
  box_context.fillStyle="white";
  box_context.fillText("0",80,125);
}

/**
 * Draw a Cross in a canvas box
 *
 * @param {Object} event_Id the element id of the canvas element
 */
function createCross(event_Id){
  var box_canvas = document.getElementById(event_Id);
  var box_context = box_canvas.getContext("2d");
  box_context.font="975% Georgia";
  box_context.lineWidth = 3;
  box_context.fillStyle="white";
  box_context.fillText("X",80,140);
}

/**
 * Makes the winning player's shapes green 
 *
 * @param {string} shape states whether player "O" or player "X" has won
 * @param {array}  positionArray holds the position values of the winning three in a row
 */
function makeGreenForWin(shape,positionArray){
	var box_canvas;
	var box_context;
	if(shape == "X"){
	  for (var i = 0; i < positionArray.length; i++) {
		  //clear original shape
		  box_canvas = document.getElementById("box_"+positionArray[i]);
		  box_context = box_canvas.getContext("2d");
		  box_context.clearRect(0, 0, box_canvas.width, box_canvas.height);
		  
		  //create green shape
		  box_context.font="975% Georgia";
		  box_context.lineWidth = 3;
		  box_context.fillStyle="green";
		  box_context.fillText("X",80,140);
	  }
	}
	
	if(shape == "O") {
	  for (var i = 0; i < positionArray.length; i++) {
		  box_canvas = document.getElementById("box_"+positionArray[i]);
		  box_context = box_canvas.getContext("2d");
		  box_context.clearRect(0, 0, box_canvas.width, box_canvas.height);
		  
		  box_context.font="1100% Georgia";
		  box_context.lineWidth = 3;
		  box_context.fillStyle="green";
		  box_context.fillText("0",80,125);
	  }
	}
	
	
}

/**
 * Determine if there is a shape in a box
 *
 * @param {number} _boxNum the specific box on the board.
 * @return {boolean}
 */
function isBoxEmpty(_boxNum) {
	if(boardArray[_boxNum] == undefined) {
		return true;
	} else {
		return false;
	}
}
