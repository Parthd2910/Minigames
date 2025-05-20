let count = JSON.parse(localStorage.getItem('count'));

if(!count){
    count = {
     Wins: 0,
     Losses: 0,
     Ties: 0
    };
}

function playGame(playerMove){
    const comp = compMove();

    let result = '';
    if(playerMove === 'SCISSORS'){

        if(comp === 'ROCK'){
        result = 'Lose';
        }else if(comp === 'PAPER'){
        result = 'Win';
        }else{
        result = 'Tie';
        }
    }

    else if(playerMove === 'PAPER'){

        if(comp === 'ROCK'){
            result = 'Win';
        }else if(comp === 'PAPER'){
            result = 'Tie';
        }else{
            result = 'Lose';
        }
        }

    else{

        if(comp === 'ROCK'){
            result = 'Tie';
        }else if(comp === 'PAPER'){
            result = 'Lose';
        }else{
            result = 'Win';
        }
        }

    if(result === 'Win'){
        count.Wins += 1;
    }
    else if(result === 'Lose'){
        count.Losses += 1;
    }
    else{
        count.Ties++;
    }

    localStorage.setItem('count', JSON.stringify(count));

    updateScore();
    
    document.querySelector('.show-result').innerHTML = result;
    
}

function updateScore(){

    document.querySelector('.result-display').innerHTML = 
    `Wins: ${count.Wins}  Losses: ${count.Losses}  Ties: ${count.Ties}`;
    
}

function compMove(){
    const random = Math.random();
    let comp = '';
    
    if(random <1/3 && random >=0){
        comp = 'ROCK';
        document.querySelector('.show-comp-moves').innerHTML = 
        `<img class='player-move-img' src='./icons/rock-emoji.png'>`;
        
    }
    else if(random >= 1/3 && random <2/3){
        comp = 'PAPER';
        document.querySelector('.show-comp-moves').innerHTML = 
        `<img class='player-move-img' src='./icons/paper-emoji.png'>`;
    }else{
        comp = 'SCISSORS';
        document.querySelector('.show-comp-moves').innerHTML = 
        `<img class='player-move-img' src='./icons/scissors-emoji.png'>`;
    }
    return comp;
}
