var canvaS = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var gravity = 1
var friction 

function randomRange(high , low){
    return Math.random() * (high - low) + low
}

function GameObject(){
    this.randius = randomRange(10,2)
    this.color = "yellow";
    this.x = canvas.width * 0.5 //random(canvas.width, 0);
    this.y = canvas.height * 0.5 //random(canvas.height, 0);
    this.vx = randomRange(30,-30)
    this.vy = randomRange(30,-30)

    this.drawCircle = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this,x, this.y, this.randius, 0, 2 * Math.PI, true);
        ctx.closePath();
        ctx.fill();

    }

    this.drawSquare = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x - this.radius, this.y - this.radius , this.radius * 2, this.radius * 2)
    }
}
//this method handles the movement
    this.move = function(){
        this.x += this.vx
        this.y += this.vy

    if(this.y > this.height - this.radius){
        this.y = this.radius

        this.y = canvas.height - this.radius

        this.vy = -this.vy * 0.6;
    }

    if(this.x < this.radius){
         this.x = this.radius
        this.vx = -this.vx *0.6
    }

    if(this.x > canvas.width - this.radius){
        this.x =  canvas.width - this.radius
        this.vx = -this.vx *0.6
    }
}
 //create an instance of the GameObject class   
//var particle = new GameObject()

//larticle.x = 10
//particle.drawCirlce()

//create an array of particles 
var particles = []

var = numParticles = 1000
var timer = requestAnimationFrame(main)

//for loop
for(var i = 0; i<numParticles; i++){
    particles[i] = new GameObject();
    particles[i].drawCircle()
}
function main(){
ctx.clearRect(0,0, canvas.width, canvas.height)
for(var i 0; i<particles.length; i++){
    particles[i].y += 1;
    particles[i].vy =+ gravity;
    //particles[i] move();
    particles[i] drawCircle();
}
timer= requestAnimationFrame(main)
}
