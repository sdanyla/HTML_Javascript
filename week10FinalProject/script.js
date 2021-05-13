var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var ship
var numAsteroids = 20
var asteroids = new Array()

//create an instance of the Playership
ship = new PlayerShip()

function randomRange(high,low){
    return Math.random() * (high-low) + low
}
//constructor function for asteroids
function Asteroids(){
    this.radius = randomRange(15,2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius)
    this.vy = randomRange(10,5)
    this.color = "white"

    this.drawAsteroid = function(){
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }
    
}

//for loop for asteroids
for(var i = 0; i < numAsteroids; i++){
asteroids[i] = new Asteroid()

}

//setup for keyboard
document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)

function keyPressDown(e){
        if(e.keyCode === 87){
            ship.up = true
        }
        if(e.keyCode === 65){
            ship.left = false
        }
        if(e.keyCode === 68){
            ship.right = false
        }
        if(e.keyCode === 83){
            ship.down = true
    }
}

function keyPressUp(e){
    //console.log("Key Up " + e.keyCode);
        if(e.keyCode === 87){
            ship.up = false
        }
        if(e.keyCode === 65){
            ship.left = false
        }
        if(e.keyCode === 68){
            ship.right = false
        }
        if(e.keyCode === 83){
            ship.down = false
        }
        
}


//constructor function
function PlayerShip(){
    this.x = canvas.width/2
    this.y = canvas.height/2
    this.w = 20
    this.h = 20
    this.vx = 0
    this.vy = 0
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.flamelength = 30

    this.drawShip = function(){
        ctx.save()
        ctx.translate(this.x, this.y)
        if(this.up || this.left || this.right){
            //change the drawing values to animate the flame
            if(this.flamelength == 30){
                this.flamelength = 10
            }else{
                this.flamelength = 30
        }
        ctx.beginPath()
        ctx.fillStyle = "orange"
        ctx.moveTo(0, this.flamelength)
        ctx.lineTo(5,5)
        ctx.lineTo(-5,5)
        ctx.lineTo(0, this.flamelength)
        ctx.closePath()
        ctx.fill()
        ctx.restore()


        {
        ctx.save()
        ctx.translate(this.X, this.Y)
        ctx.rotate(degree)
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.moveTo(0,-10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, 0)
        ctx.closePath()
        ctx.fill();
        ctx.restore()
        }
    
    }
    this.move = function(){
        this.x += this.vx
        this.y += this.vy

        //bottom boundry
        if(this.y > canvas.height - this.h/2){
            this.y = canvas.hight - this.h/2
            this.vy = 0
     
       }
        //top boundry
         if(this.y < this.h/2){
            this.y = this.h/2
             this.vy = 0
    }
        //right boundry
        if(this.x > this.w/2){
             this.x = canvas.hight - this.h/2
             this.vx = 0
}
        //left boundry
         if(this.x <  this.w/2){
            this.x = this.w/2
             this.vx = 0
        
}
function main(){
    //clear canvas
    //shipY-=1
    degree++;
    ctx.clearRect(0,0,canvas.width, canvas.height)
    //Verticle
    if(ship.up){
        ship.vy = -10  
    }else{
        ship.vy = 3

    //Horizontal Movement    
    if(ship.left){
        ship.vx = -3
    }else if(ship.right){
        ship.vx = 3
    }else{
        ship.vx = 0
    }

    for(var i = 0; i<asteroids.length; i++){
       
        asteroids[i].y += asteroids[i].vy
        asteroids[i].drawAsteroid()
    }
   
    ship.move()
    ship.drawShip()

    timer = requestAnimationFrame(main)
}
}
}
}
}