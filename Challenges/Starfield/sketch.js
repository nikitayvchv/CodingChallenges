var stars = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	var speed = 0.0;
	for (var i = 0; i < 800; i++){
		stars[i] = new Star;
	}
}

function draw() {
	 speed = map(mouseX, 0, windowWidth, 0, 20);
	 background(0);
	 translate(windowWidth/2, windowHeight/2);
	 for (var i = 0; i < stars.length; i++){
		 stars[i].update(speed);
		 stars[i].show();
	 }
}
