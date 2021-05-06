var rps = []
rps[0]
rps[1]
rps[2]

//array of buttons
var btn = document.querySelectorAll('button')
//console.log('btn')
btn[0].addEventListener('click', function (e) { playGame(0) })
btn[1].addEventListener('click', function (e) { playGame(1) })
btn[2].addEventListener('click', function (e) { playGame(2) })

function playGame(playerChoice){
    //generate cpu choice

    var cpuChoice = Math.floor(Math.random() * 2.99)

    //example of a switch case
    switch(playerChoice){
        case 0: 
        if(cpuChoice == 0){
            //it's a tie
            showResults("Rock","Rock", "Tie")
        }
        else if(cpuChoice == 1){
            //computer wins
            showResults("Rock","Paper", "You Lose")
        }
        else{
            //player wins
            showResults("Rock","Scissors", "Victory")
        }
            break;
        case 1: 
        if(cpuChoice == 0){
            //it's a tie
            showResults("Paper","Paper", "Tie")
        }
        else if(cpuChoice == 1){
            //computer wins
            showResults("Paper","Rock", "You Lose")
        }
        else{
            //player wins
            showResults("Paper","Scissors", "Victory")
        }
            break;
        case 2: 
        if(cpuChoice == 0){
            //it's a tie
            showResults("Scissors","Scissors", "Tie")
        }
        else if(cpuChoice == 1){
            //computer wins
            showResults("Scissors","Rock", "You Lose")
        }
        else{
            //player wins
            showResults("Scissors","Paper", "Victory")
        }
            break;
    }
}

function showResults(pChoice, cChoice, result){
    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("result").innerHTML = result
}

