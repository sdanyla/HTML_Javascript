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
                alert("Cpu chose Rock, You Tied");
            }
            else if(cpuChoice === 1){
              alert("Cpu choses Paper, You Lose!");  
            }
            else{
                alert("Cpu choses Scissors, You Win!");  
            }
        break;
        case 1: 
            if(cpuChoice === 0){
                alert("Cpu chose Rock, You Win");
            }
            else if(cpuChoice === 1){
            alert("Cpu choses Paper, You Tied!");  
            }
            else{
                alert("Cpu choses Scissors, You Lose!");  
            }
        break;
        case 2: 
            if(cpuChoice === 0){
                alert("Cpu chose Rock, You Lose");
            }
            else if(cpuChoice === 1){
                alert("Cpu choses Paper, You Win!");  
            }
            else{
                alert("Cpu choses Scissors, You Tied!");  
            }
        break;

    }
}