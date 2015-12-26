var step = 0;
//First step
var x1 = 600;
var y1 = 300;
//second
var x2 = 0;
var check = 0;

//Called once when the page is ready
function setup() {
	console.log("Setup");
	createCanvas(windowWidth, windowHeight);
	stroke(0)
	strokeWeight(4);
	textFont("Century Gothic");
	textSize(60);
}

//first step in animation
function firstStep(){
	line(600,300,x1,300);
	line(600,300,600, y1)
	x1 -= 12;
	y1 -= 4;
	if (y1<100) {
		step=1;
	};
}


//once the first is done the second gets called
function secondStep(){
	var w = Math.sqrt((((x2-600)*(x2-600)/(-600*600)+1)*100*100))+300;
	background(255,255,255)
	text("NewPerspectives",650,260);
	stroke(255);	
	rect(x2, 100,2000, 190);
	stroke(0);
	line(600,300,600,100);
	line(600,300,x2, w );
	
	x2 +=12;

	if (x2>=1200) {
	step=2;
};
}

//and then the third
function thirdStep(){
	background(255,255,255)
	line(600,300,1200,300);
	line(600,300,600, 100);
	text("NewPerspectives",650,260);
	if (check == 0) {
		check = 1;
		setTimeout(function(){ 
			check = 0;
			background(255,255,255)
			step = 0;
			x1 = 600;
			y1 = 300;
			x2 = 0; 
		}, 3000);};
}

//Called every frame after setup is called
function draw() {
	if (step==0) {firstStep();}
	if (step==1) {secondStep();}
	if (step==2) {thirdStep();}
}

