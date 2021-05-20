var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);
var ship
var numAsteroids = 20
var asteroids = []
var gameOver = false
var gameStates = []
var currentState = 0
var score = 0
var highscore = 0



function randomRange(high, low) {
    return Math.random() * (high - low) + low
}

function gameStart() {
    //for loop for asteroids
    for (var i = 0; i < numAsteroids; i++) {
        asteroids[i] = new Asteroid()
    }



    //create an instance of the Playership
    ship = new PlayerShip()
}
//constructor function for asteroids
function Asteroid() {
    this.radius = randomRange(15, 2)
    this.x = randomRange(canvas.width - this.radius, this.radius)
    this.y = randomRange(canvas.height - this.radius, this.radius) - canvas.height
    this.vy = randomRange(10, 5)
    this.color = "white"

    this.drawAsteroid = function() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

}


//setup for keyboard
document.addEventListener('keydown', keyPressDown)
document.addEventListener('keyup', keyPressUp)

function keyPressDown(e) {
    if (!gameOver) {
        if (e.keyCode === 87) {
            ship.up = true
        }
        if (e.keyCode === 65) {
            ship.left = false
        }
        if (e.keyCode === 68) {
            ship.right = false
        }
        if (e.keyCode === 83) {
            ship.down = true
        }

        if (!gameOver) {

            //checking for spacebar
            if (e.keyCode == 32) {
                if (currentState == 2) {
                    //game over screen
                    currentState = 0
                    //resets nmber of asteroids
                    numAsteroids = 20
                    //empties asteroids array
                    asteroids = []
                    //resets score
                    score = 0
                    gameStart()
                    main()
                }
                else {
                    //main screen
                    gameStart()
                    currentState = 1
                    gameOver = false
                    main()
                    scoreTimer()
                    console.log("space")
                }

            }
        }
    }

}

function keyPressUp(e) {
    //console.log("Key Up " + e.keyCode);
    if (!gameOver) {
        if (e.keyCode === 87) {
            ship.up = false
        }
        if (e.keyCode === 65) {
            ship.left = false
        }
        if (e.keyCode === 68) {
            ship.right = false
        }
        if (e.keyCode === 83) {
            ship.down = false
        }
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
            ctx.save()
            //Changes the drawing values to animate the flame
            if(this.flamelength == 30){
                this.flamelength = 20
                ctx.fillStyle = "yellow"

            }else{
                this.flamelength = 30
                ctx.fillStyle = "orange"
            }

            ctx.save()
            ctx.beginPath()
            ctx.fillStyle = "orange"
            ctx.moveTo(0, this.flamelength)
            ctx.lineTo(5, 5)
            ctx.lineTo(-5, 5)
            ctx.lineTo(0, this.flamelength)
            ctx.closePath()
            ctx.fill()
            ctx.restore()

        }

        
        //ctx.translate(this.X, this.Y)
        // ctx.rotate(degree)
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.moveTo(0, -10)
        ctx.lineTo(10, 10)
        ctx.lineTo(-10, 10)
        ctx.lineTo(0, 0)
        ctx.closePath()
        ctx.fill();
        ctx.restore()
    }


this.move = function () {
    this.x += this.vx
    this.y += this.vy

    //bottom boundry
    if (this.y > canvas.height - this.h / 2) {
        this.y = canvas.hight - this.h / 2
        this.vy = 0

    }
    //top boundry
    if (this.y < this.h / 2) {
        this.y = this.h / 2
        this.vy = 0
    }
    //right boundry
    if (this.x > this.w / 2) {
        this.x = canvas.hight - this.h / 2
        this.vx = 0
    }
    //left boundry
    if (this.x < this.w / 2) {
        this.x = this.w / 2
        this.vx = 0

    }
}
}
//Main Screen
gameStates[0] = function () {
    ctx.save()
    ctx.font = "30px Arial"
    ctx.fillStyle = "white"
    ctx.textureAllign = "center"
    ctx.fillText("Asteroid Avoider", canvas.width / 2, canvas.height / 2 - 30)
    ctx.font = "15 px Arial"
    ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2 + 30)
    ctx.restore()

}


//Game Screen
gameStates[1] = function () {
    //code for displaying score
    ctx.save()
    ctx.font = "15px Arial"
    ctx.fillStyle = "white"
    ctx.fillText("Score: " + score.toString(), canvas.width - 150, 30)
    ctx.restore()

    //Verticle
    if (ship.up) {
        ship.vy = -10
    } else {
        ship.vy = 3
    }
    //Horizontal Movement    
    if (ship.left) {
        ship.vx = -3
    } else if (ship.right) {
        ship.vx = 3
    } else {
        ship.vx = 0
    }
    //asteroids and there posityions 
    for (var i = 0; i < asteroids.length; i++) {
        var dX = ship.x - asteroids[i].x
        var dY = ship.y - asteroids[i].y
        var distance = Math.sqrt((dX * dX) + (dY * dY))

        if (detectCollision(distance, (ship.h / 2 + asteroids[i].radius))) {
            console.log("hit asteroid")
            gameOver = true
            currentState = 2
            main()
        }

        if (asteroids[i].y > canvas.height + asteroids[i].radius) {
            asteroids[i].x = randomRange(canvas.width - asteroids[i].radius, asteroids[i].radius)
            asteroids[i].y = randomRange(canvas.height - asteroids[i].radius, asteroids[i].radius) - canvas.height
        }
        if (!gameOver) {
            asteroids[i].y += asteroids[i].vy
            asteroids[i].drawAsteroid()
        }
    }
    if (!gameOver) {
        ship.move()
        ship.drawShip()
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid())

    }

}
//Game Over
gameStates[2] = function () {
    if(score > highScore){
        //set a new high score
        highScore = score
        ctx.save()
        ctx.font = "30px Arial"
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText("Game Over, your high score score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
        ctx.fillText("Your new high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
        ctx.fillText("New Record", canvas.width/2, canvas.height/2)
        ctx.font = "15px Arial"
        ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
        ctx.restore()

    }else{
         //keep same score new high score
         ctx.save()
         ctx.font = "30px Arial"
         ctx.fillStyle = "white"
         ctx.textAlign = "center"
         ctx.fillText("Game Over, your score was: " + score.toString() , canvas.width/2, canvas.height/2-60)
         ctx.fillText("Your high score is: " + highScore.toString() , canvas.width/2, canvas.height/2-30)
         ctx.font = "15px Arial"
         ctx.fillText("Press Space to Play Again", canvas.width/2, canvas.height/2 + 20)
         ctx.restore()
    }
   
}

function main() {
    //clear canvas
    //shipY-=1
    //degree++;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    gameStates[currentState]()
    if (!gameOver) {
        timer = requestAnimationFrame(main)
    }
}
function detectCollision(distance, calcDistance) {
    return distance < calcDistance
}

//Timer for Score

function scoreTimer(){
    if(!gameOver){
        score++
        //using modulus  that returns remainder of a decimal
        //checks to see if remainder is divisble by 5
        if(score % 5 == 0){
            numAsteroids += 5
            console.log(numAsteroids)
        }



        setTimeout(scoreTimer, 1000)

    }



}