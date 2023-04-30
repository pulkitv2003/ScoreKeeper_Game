const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const p1Display = document.querySelector("#score1")
const p2Display = document.querySelector("#score2")
const resetButton = document.querySelector("#button3")
const selectButton = document.querySelector("#select")
let score1 = 0;
let winningScore = 3;
let isGameOver = false;
button1.addEventListener('click',()=>{
    if(!isGameOver){
        score1 += 1
        if(score1 === winningScore){
            isGameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('looser')
            button1.disabled = true;
            button2.disabled = true;
        }
        p1Display.textContent = score1
    }
})
let score2 = 0;
button2.addEventListener('click',()=>{
    if(!isGameOver){
        score2 += 1
        if(score2 === winningScore){
            isGameOver = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('looser')
        }
        p2Display.textContent = score2
    }
})
selectButton.addEventListener('change',()=>{
    winningScore = parseInt(selectButton.value)
    reset();
})
resetButton.addEventListener('click',reset)

function reset(){
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','looser')
    p2Display.classList.remove('winner','looser')
    button1.disabled4 = false;
    button2.disabled = false;
}