var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
// //Rectangle
// ctx.fillStyle = 'rgba(250,0,0,0.5)';
// ctx.fillRect(100,100,100,100); 
// ctx.fillRect(400,100,100,100); 
// ctx.fillRect(300,300,100,100); 
// console.log(canvas);

// //line
// ctx.beginPath();
// ctx.moveTo(50,300);
// ctx.lineTo(300,100);
// ctx.lineTo(400,300);
// ctx.strokeStyle = "#bc5411";
// ctx.stroke();

// //Arc / Circle
// ctx.beginPath();
// ctx.arc(300,300,30,0,Math.PI*2,false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// // Random color , position circles
// for (var i = 0; i < 3; i++) {
// 	var x = Math.random()*window.innerWidth;
// 	var y = Math.random()*window.innerHeight;
// 	var r = Math.ceil(Math.random()*255);
// 	var g = Math.ceil(Math.random()*255);
// 	var b = Math.ceil(Math.random()*255);
// 	console.log(r + " " + g + " " + b);
// 	ctx.beginPath();
// 	ctx.arc(x,y,30,0,Math.PI*2,false);
// 	ctx.strokeStyle = 'rgba('+ r +','+g+','+b+',1)';
// 	// ctx.strokeStyle = "blue";
// 	ctx.stroke();
// }


// Circle moving animation


function Circle(x,y,dx,dy,radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		ctx.strokeStyle = 'blue';
		// ctx.fillStyle = 'blue';
		ctx.stroke();
		ctx.fill();
	}

	this.update = function(){
		if (this.x + this.radius>innerWidth  || this.x-this.radius<0) {
			this.dx = -this.dx;
		}
		if (this.y+this.radius > innerHeight || this.y-this.radius<0) {
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var circleArray = [];

for (var i = 0; i < 10; i++) {
	var radius = 30;
	var x = Math.random()*(innerWidth - radius*2) + radius;
	var y = Math.random()*(innerHeight- radius*2) + radius;
	var dx = (Math.random()-0.5)*8;
	var dy = (Math.random()-0.5)*8;

	circleArray.push(new Circle(x,y,dx,dy,radius));
	// var circle = new Circle(200, 200,3,3,30);	
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,innerWidth,innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();

