var c = document.querySelector('canvas');
var context = c.getContext("2d");
var timer = requestAnimationFrame(main);
var gravity = 1;


function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 0;
    this.h = 0;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;


    this.draw = function(){
        context.save();

        context.beginPath();
        context.translate(this.x, this.y);
        context.fillStyle = "red";
        context.moveTo(0, -13);
        context.lineTo(10, 10);
        context.lineTo(-10, 10);
        context.lineTo(0, -13);
        context.closePath();
        context.fill();
        
        context.restore();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        
        if(this.y > c.height - 10){
            this.y = c.height - 10;
            this.vy = 0;
        }
    } 
}

//create the instance of the ship for the game
var ship = new PlayerShip();

document.addEventListener('keydown', keyPressDown);
document.addEventListener('keyup', keyPressUp);

function keyPressDown(e){
    //console.log("Key Down" + e.keyCode);
    if(e.keyCode === 38){
        ship.up = true;
    }
    if(e.keyCode === 37){
        ship.left = true;
    }
    if(e.keyCode === 39){
        ship.right = true;
    }
}

function keyPressUp(e){
    //console.log("Key Up" + e.keyCode);
    if(e.keyCode === 38){
        ship.up = false;
    }
    if(e.keyCode === 37){
        ship.left = false;
    }
    if(e.keyCode === 39){
        ship.right = false;
    }
}

function main(){
    context.clearRect(0,0, c.width, c.height);

    ship.vy += gravity;

    if(ship.up == true){
        ship.vy = -10;
    }

    if(ship.left == true){
        ship.vx = -1;
    }
     
    else if(ship.right == true){
        ship.vx = 1;
    }
    else{
        ship.vx = 0;
    }

    ship.draw();
    ship.move();
  
    timer = requestAnimationFrame(main);

}