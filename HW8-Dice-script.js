

const btn = document.querySelector('#btn')
const player = document.querySelector('.player')
const computer = document.querySelector('.computer')
let playerScore = document.querySelector('#playerScore')
let computerScore = document.querySelector('#computerScore')
let message = document.querySelector('#message')



const playerOptions = ['dice1p', 'dice2p', 'dice3p', 'dice4p', 'dice5p', 'dice6p'];
const computerOptions = ['dice1c', 'dice2c', 'dice3c', 'dice4c', 'dice5c', 'dice6c'];



btn.addEventListener('click', ()=>{
    let randomPlayerIndex = playerOptions.indexOf(playerOptions[Math.floor(Math.random()*6)])
    let randomCopmuterIndex = computerOptions.indexOf(computerOptions[Math.floor(Math.random()*6)])
    
    console.log(randomPlayerIndex, randomCopmuterIndex)
    
    
    // function displayCubes(){
    //     playerOptions[randomPlayerIndex].style.display = 'block';
    //     computerOptions[randomCopmuterIndex].style.display = 'block';
        
    // }

    if (randomPlayerIndex == randomCopmuterIndex){
        //displayCubes()
        message.innertext = 'Its a tie'
       
    }else if (randomPlayerIndex > randomCopmuterIndex){
        //displayCubes()
        playerScore.innerHTML++
    }else{
        //displayCubes()
        computerScore.innerHTML++
    }

})


