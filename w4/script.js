var c = document.querySelector('canvas');
var ctx = c.getContext('2d');


//examples for loading images to cavas
var vehicle = new Image();
vehicle.src = 'images/car.png';

vehicle.onload = function(){
    main()
}

var x = 0;

//Timer
var timer = requestAnimationFrame(main);

//variables for starting and finish line

var start = 58;
var finish = 956;


//fuel variable

var startFuel = 450;
var fuel = startFuel;
var barfullWidth = 512;

//Start timer Stuff
var sec = 3;
var fps = 60;
var frames = fps;

var someNum = randomRange(10, 5)
console.log(someNum);

var car = new GameObject();
car.y = c.height / 1.4

car.x = 5;
car.color = "green";
car.image = vehicle;


function main() {
    timer = requestAnimationFrame(main);
    //Clear the canvas
    ctx.clearRect(0, 0, c.width, c.height);

    drawBox("Black", start, 300, 10, 400)

    

    //drawBox();
    drawBox("White", finish, 300, 10, 400)

    drawFuelBar();

    drawFuelText();
    //draw instance of a car



    if (sec > 0) {
        runStartTimer();
        drawStartTimer();

    }
    else {
        if (fuel > 0) {
            //update x 
            car.x += 2;
            x += 1;
            fuel -= 1;

        }
    }
   //car.draw();
   car.drawSprite();
    //Draw some Text
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.font = "50px Arial";
    ctx.textAlign = 'center'
    


    //checks to see if player made it to the finish line
    if (fuel <= 0 || x + 100 > finish) {
        drawResults();
    }

}



function drawSprite() {
    //draw image to canvas
    ctx.drawImage(mario, x, 110, 100, 100);
}

function drawBox(color, x, y, w, h) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h)


}

function drawFuelBar() {
    var barCurrentWidth = barfullWidth * getFuelPercentage();

    ctx.fillStyle = 'red'
    ctx.fillRect(start, 80, barCurrentWidth, 10);

}

function drawFuelText() {
    ctx.fillStyle = 'dark blue'
    ctx.font = '30px Arial'
    ctx.fillText(fuel, start, 50);
}

function getFuelPercentage() {
    return fuel / startFuel
}

function drawResults() {
    //winning condition
    if (x + 700 > finish) {
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center'
        ctx.fillText("You made it to the Finish Line! You Won!", c.width / 2, c.height / 2);

    }

    else {
        //losing condition
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.textAlign = 'center'
        ctx.fillText("You ran out of Fuel...whom whomp whomp :( You lose", c.width / 2, c.height / 2);
    }
}

function runStartTimer() {
    frames -= 1;
    if (frames < 0) {
        frames = fps;
        sec -= 1;
    }
}

function drawStartTimer() {
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.textAlign = 'center'
    ctx.fillText(sec, c.width / 2, c.height / 2);
}
