var cols = [];
var rows = [];
var scl = 20;

var terrain = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	cols = width/scl;
	rows = height/scl;
}

function draw() {
	background(0);
			stroke(255);
			noFill();
	translate(width/2, height/2);
	rotate(PI/3);
	translate(-width/2, -height/2);
	for (var y = 0; y < cols; y++){
		//beginShape(TRIANGLE_STRIP);
		for (var x = 0; x < rows; x++){
			//vertex(x+scl, y*scl);
			rect(x*scl, y*scl, scl, scl);
		}
		//endshape();
	}
}
