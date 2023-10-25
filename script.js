
const board = Array.from(document.querySelectorAll('.game > div'));
const game = document.querySelector('.game')
const restart = document.getElementById('restart')
const start = document.querySelector('.start > button')
const startBox = document.querySelector('.start')
const container = document.querySelector('.containor')
let i = true;
const player1 = []
const player2 = []
const containor = document.querySelector('.containor')
let j = 0


const gameBoard = (function() {
    board.forEach((box) => {
        box.addEventListener('click', (event) => {
            if (box.classList.contains('cross') || box.classList.contains('zero')) {
                
                return event.preventDefault();
            }
            
            if (i) {
                box.classList.add('cross')
                player1.push(box.dataset.value)

            }
            
            else if(!i){
                box.classList.add('zero')
                player2.push(box.dataset.value)
                
    
            }
            
            i = !i
            j++
            
            {   const winner = check(player1 , player2);
                 if (winner  === 'x') {
                    showWinBox(winner)
                    return event.preventDefault()
                    
                }
                else if(winner === 'o'){
                    showWinBox(winner)
                    return event.preventDefault()

                }
                else if (j === 9) {
                    setTimeout(700);
                    matchTie();
                }

                
            }
    
        })
    })
})();

start.addEventListener('click' , ()=>{
    
    startBox.style.display = 'none'
    container.style.display = 'flex'
})
restart.addEventListener('click' , restartGame);
const conditions = [
['1','5','9'],
['1','2','3'],
['4','5','6'],
['7','8','9'],
['1','4','7'],
['2','5','8'],
['3','6','9'],
['3','5','7']];



function check(player_1 , player_2){
 
    if (1) {
        let checkXMoves = conditions.some((subArray) => subArray.every(element => player_1.includes(element)));
        let checkOMoves = conditions.some((subArray) => subArray.every(element => player_2.includes(element)));
        
        if (checkXMoves) {
            
            return 'x';
        }
        else if (checkOMoves) {
            return 'o';
            
        }
    
    }


}
function showWinBox(win) {
    setTimeout(1000);
    containor.style.display = 'none' ;
    let winBox = document.getElementById("winBox");
    let msg = winBox.querySelector('.win-message')
  
    winBox.style.display = "block";
    if (win === 'x') {
        
    msg.textContent = 'palyer X wins'
    }
    else if (win === 'o') {
        
    msg.textContent = 'palyer O wins'
    }
    
}

restart.addEventListener('click' , ()=>{
    player1.splice(0 , player1.length)
    player2.splice(0 , player2.length)
    i = true;
    board.forEach((box)=>{
        box.classList.remove('zero' , 'cross')
    })    
})

function restartGame() {
    j=0 ;
    containor.style.display = 'flex' ;
    let winBox = document.getElementById("winBox");
    winBox.style.display = "none";
}
function matchTie(){
    containor.style.display = 'none' ;
    let winBox = document.getElementById("winBox");
    let msg = winBox.querySelector('.win-message')
    msg.textContent = 'Match is Tie'
    winBox.style.display = "block";
}

