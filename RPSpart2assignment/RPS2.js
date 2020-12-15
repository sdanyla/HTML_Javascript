window.onload = function () {
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");
    var result = "Select a button from above to choose.";

    //create instances of images
    var rock = new Image();
    var paper = new Image();
    var scissors = new Image();
    var hrock = new Image();
    var hpaper = new Image();
    var hscissors = new Image();

    rock.src = "images/rock.jpg"
    paper.src = "images/paper.jpg"
    scissors.src = "images/scissors.jpg"
    hrock.src = "images/rock2.jpg"
    hpaper.src = "images/paper2.jpg"
    hscissors.src = "images/scissors2.jpg"

    hscissors.onload = function(){
        draw(rock, paper,scissors,rock, paper, scissors);
    }

    //Array of choices
    var rps = [];
    rps[0] = "Rock";
    rps[1] = "Paper";
    rps[2] = "Scissors";

    //Array of buttons
     btn[0].innerHTML = rps[0];
    btn[1].innerHTML = rps[1];
    btn[2].innerHTML = rps[2];

    //When Button is clicked play game
    //event listener for rock
    btn[0].addEventListener('click', function (e) {
        play(0);
    });

    //event listener for paper
    btn[1].addEventListener('click', function (e) {
        play(1);
    });

    //event listener for scissors
    btn[2].addEventListener('click', function (e) {
        play(2);
    });


    function play(playersChoice) {
        var cpuChoice = Math.floor(Math.random() * 2.9999);

        //example of switch case
        switch (playersChoice) {
            case 0:
                if (cpuChoice === 0) {
                   // alert("Cpu chose Rock, You Tied");
                   result = "You Tie!"
                   draw(hrock, paper, scissors, hrock, paper, scissors);

                }
                else if (cpuChoice === 1) {
                    //alert("Cpu choses Paper, You Lose!");
                    result = "You Lose!"
                    draw(hrock, paper, scissors, rock, hpaper, scissors);
                }
                else {
                    //alert("Cpu choses Scissors, You Win!");
                    result = "You Win!"
                    draw(hrock, paper, scissors, rock, paper, hscissors);
                }
                break;
            case 1:
                if (cpuChoice === 0) {
                    //alert("Cpu chose Rock, You Win");
                    result = "You Win!"
                    draw(rock, hpaper, scissors, hrock, paper, scissors);
                }
                else if (cpuChoice === 1) {
                    //alert("Cpu choses Paper, You Tied!");
                    result = "You Tied!"
                    draw(rock, hpaper, scissors, rock, hpaper, scissors);
                }
                else {
                    //alert("Cpu choses Scissors, You Lose!");
                    result = "You Lose!"
                    draw(rock, hpaper, scissors, rock, paper, hscissors);
                }
                break;
            case 2:
                if (cpuChoice === 0) {
                    //alert("Cpu chose Rock, You Lose");
                    result = "You Lose!"
                    draw(rock, paper, hscissors, hrock, paper, scissors);
                }
                else if (cpuChoice === 1) {
                    //alert("Cpu choses Paper, You Win!");
                    result = "You Win!"
                    draw(rock, paper, hscissors, rock, hpaper, scissors);
                }
                else {
                    //alert("Cpu choses Scissors, You Tied!");
                    result = "You Tie!"
                    draw(rock, paper, hscissors, rock, paper, hscissors);
                }
                break;

        }
    }

    function draw(rock, paper, scissors, crock, cpaper, cscissors){
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillRect(0,0, c.width,c.height);

        ctx.save();
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.fillText("Player Choices", c.width/2, 100);
        ctx.drawImage(rock, c.width/2 - rock.width/2 - 100, 150);
        ctx.drawImage(paper, c.width/2 - paper.width/2, 150);
        ctx.drawImage(scissors, c.width/2 - scissors.width/2 + 100, 150);

        ctx.fillText("Computer Choices", c.width/2, 325);
        ctx.drawImage(crock, c.width/2 - rock.width/2 - 100, 375);
        ctx.drawImage(cpaper, c.width/2 - paper.width/2, 375);
        ctx.drawImage(cscissors, c.width/2 - scissors.width/2 + 100, 375);

        ctx.fillText(result, c.width/2, 525);
        ctx.restore();
    }
}