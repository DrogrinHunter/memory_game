const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; 
let lockBoard = false;
let firstCard, secondCard; 

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');
    
    if (!hasFlippedCard) {
        //this will be the first click of the game
        hasFlippedCard = true;
        firstCard = this;

        return;
    } 
    
    
    //this will be the second click of the game
       hasFlippedCard = false;
       secondCard = this;
        
       //do the cards match?
       checkForMatch()

    
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
            
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
            }, 1500);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

//restarting game
function startGame(){
    resetBoard();
    console.log("this has worked");
    location.reload();
}

cards.forEach(card => card.addEventListener('click', flipCard))