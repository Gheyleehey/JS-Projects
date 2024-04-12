
function getComputerChoice(){
    const options=["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];

}


function playRound(playerSelection, computerSelection){
    if(playerSelection==="Rock"&&computerSelection==="Paper"){
        return "You Lose!";
    }
    else if(playerSelection==="Rock"&&computerSelection==="Rock") {
        return "Draw!";
    }
    else if(playerSelection==="Rock"&&computerSelection==="Scissors"){
        return "You Win!"
    }
    else if(playerSelection==="Paper"&&computerSelection==="Paper"){
        return "Draw!";
    }
    else if(playerSelection==="Paper"&&computerSelection==="Rock") {
        return "You Win!";
    }
    else if(playerSelection==="Paper"&&computerSelection==="Scissors"){
        return "You Lose!";
    }
    if(playerSelection==="Scissors"&&computerSelection==="Paper"){
        return "You Win!";
    }
    else if(playerSelection==="Scissors"&&computerSelection==="Rock") {
        return "You Lose!";
    }
    else if(playerSelection==="Scissors"&&computerSelection==="Scissors"){
        return "Draw!"
    }
}


function playGame(){
    let x=0;
    let y=0;    
    for(let i=0;i<=4;i++){
        const playerSelection = prompt("Rock!,Paper!,Scissors!");
        const computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
        if(playRound(playerSelection,computerSelection)==="You Lose!"){
            y+=1;
        
        }
        else if(playRound(playerSelection,computerSelection)==="You Win!"){
            x+=1;

        }
        else{
            --i;
        }
    }
    return x+":"+y;
}

console.log(playGame());
