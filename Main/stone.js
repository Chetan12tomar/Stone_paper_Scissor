const choices=document.querySelectorAll('.choice');
console.log(choices);
const score=document.getElementById('score');
console.log(score);
const result=document.getElementById('result');
console.log(result);
const restart=document.getElementById('restart');
console.log(restart);
const modal=document.querySelector('.modal');
console.log(modal);
const scoreboard={
    player:0,
    computer:0
}
console.log(scoreboard);

// Play Game

function play(e) {
    restart.style.display='inline-block';
    // console.log(e.target.id);
    const player=e.target.id;
    const computerChoice=getComputerChoice();
    // console.log(computerChoice);
    const winner=getWinner(player,computerChoice);
    // 
    showWinner(winner,computerChoice);
}
// Get Computer Choice
function getComputerChoice(){
    const rand=Math.random();
    console.log(rand);
if(rand<0.34)
{
    return 'rock';
}
else if(rand<=0.67){
    return 'paper';
}else{
    return 'scissors';
}
}

// Get game winner
function getWinner(p,c){
    if(p==c){
        return 'draw';
    }
    else if(p==='rock'){
        if(c==='paper'){
            return 'computer';
}else{
return 'player';
}
    }   
    else if(p=='paper') {
        if(c=='scissors'){
            return 'computer';
        }else{
            return 'player';
        }

    }
    
       else if(p=='scissors'){
            if(c=='rock'){
                return 'computer';
            }
            else{
                return 'player';
            }
        }
    }

    function showWinner(winner,computerChoice){
        if(winner=='player')
        {
            scoreboard.player++;

            // show modal result

            result.innerHTML=`<h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"</i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;
        }
        else if(winner=='computer'){
            scoreboard.computer++;

            // show modal result

            result.innerHTML=`<h1 class="text-win">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"</i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;

        }
        else{
            result.innerHTML=`<h1 class="text-win">Its a draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"</i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;

        }
        score.innerHTML=`<p>Player:${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
         `;

         modal.style.display='block';
    }

    function clearModal(e){
        if(e.target==modal){
            modal.style.display='none';
        }
    }

    function restartGame(){
        scoreboard.player=0;
        scoreboard.computer=0;
        score.innerHTML=`
        <p>Player:0</p>
        <p>Computer:0</p>
         `;
    }

// Event Listeners

choices.forEach(choice=> choice.addEventListener('click',play));
window.addEventListener('click',clearModal);
restart.addEventListener('click',restartGame);