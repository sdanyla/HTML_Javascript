//window.onload = function(){
    var c = document.querySelector("canvas");
    var ctx = c.getContext("2d");
    
    var rock = new Image();
    var paper = new Image();
    var scissor = new Image();
    var hrock = new Image();
    var hpaper = new Image();
    var hscissor = new Image();
    
    rock.src = "images/Rockcut.jpg";
    paper.src = "images/papercut.jpg";
    scissor.src = "images/Scissorscut.jpg";
    
    hrock.src = "images/Rock.jpg";
    hpaper.src = "images/paper.jpg";
    hscissor.src = "images/Scissors.jpg";
    
    hrock.onload = function(){
        draw(rock, paper,scissor, rock, paper,scissor);
    }
    hpaper.onload = function(){
        draw(rock, paper,scissor, rock, paper,scissor);
    }
    
    hscissor.onload = function(){
        draw(rock, paper,scissor, rock, paper,scissor);
    }

    var results = "Pick an option from the buttons above."
    
    
    var rps = [];
    rps[0] = "Rock";
    rps[1] = "Paper";
    rps[2] = "Scissors";
    
    //Array of Buttons
    var btn = document.querySelectorAll('a');
    //assign event listeners to the buttons
    btn[0].addEventListener('click', function(e){play(0)});
    btn[1].addEventListener('click', function(e){play(1)});
    btn[2].addEventListener('click', function(e){play(2)});
    
    function play(playersChoice){
        var cpuChoice = Math.floor(Math.random() * 2.999);
       // alert("Player Choice: " + rps[playersChoice] + " vs. Computer Choice: " + rps[cpuChoice]);
    }


    function draw(rock, paper, scissor, crock, cpaper, cscissor){
        ctx.clearRect(0,0,c.width,c.height);
        ctx.fillRect(0,0,c.width,c.height);
    
        ctx.save();
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.fillText("Player Choice", c.width/2, 100);
        ctx.drawImage(rock, c.width/2 - rock.width/2 -100, 150);
        ctx.drawImage(paper, c.width/2 - paper.width/2, 150);
        ctx.drawImage(scissor, c.width/2 - scissor.width/2 + 100, 150);
    
        ctx.fillText("Computer Choice", c.width/2, 325);
        ctx.drawImage(crock, c.width/2 - rock.width/2 - 100, 375);
        ctx.drawImage(cpaper, c.width/2 - paper.width/2, 375);
        ctx.drawImage(cscissor, c.width/2 - scissor.width/2 + 100, 375);
        //displays results
        ctx.fillText(results, c.width/2, 525);    
    
        ctx.restore();
    }
    

    
//Array of choices
var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";

//Array of buttons
var btn = document.querySelectorAll('a');
btn[0].innerHTML = rps[0];
btn[1].innerHTML = rps[1];
btn[2].innerHTML = rps[2];

//When Button is clicked play game
//event listener for rock
btn[0].addEventListener('click', function(e){
    play(0);
}); 

//event listener for paper
btn[1].addEventListener('click', function(e){
    play(1);
}); 

//event listener for scissors
btn[2].addEventListener('click', function(e){
    play(2);
}); 


function play(playersChoice){
    var cpuChoice = Math.floor(Math.random()*2.9999);

    //example of switch case
    switch(playersChoice){
        case 0: 
            if(cpuChoice === 0){
                draw(hrock, paper, scissor, hrock, paper, scissor)
                //alert("Cpu chose Rock, You Tied");
            }
            else if(cpuChoice === 1){
                draw(hrock, paper, scissor, rock, hpaper, scissor)
              //alert("Cpu choses Paper, You Lose!");  
            }
            else{
                draw(hrock, paper, scissor, rock, paper, hscissor)
                //alert("Cpu choses Scissors, You Win!");  
            }
        break;
        case 1: 
            if(cpuChoice === 0){
                draw(rock, hpaper, scissor, hrock, paper, scissor)
                //alert("Cpu chose Rock, You Win");
            }
            else if(cpuChoice === 1){
                draw(rock, hpaper, scissor, rock, hpaper, scissor)
                //alert("Cpu choses Paper, You Tied!");  
            }
            else{
                draw(rock, hpaper, scissor, rock, paper, hscissor)
                //alert("Cpu choses Scissors, You Lose!");  
            }
        break;
        case 2: 
            if(cpuChoice === 0){
                draw(rock, paper, hscissor, hrock, paper, scissor)
                //alert("Cpu chose Rock, You Lose");
            }
            else if(cpuChoice === 1){
                draw(rock, paper, hscissor, rock, hpaper, scissor)
                //alert("Cpu choses Paper, You Win!");  
            }
            else{
                draw(rock, paper, hscissor, rock, paper, hscissor)
                //alert("Cpu choses Scissors, You Tied!");  
            }
        break;

    }
}
    //}