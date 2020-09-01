const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false; 
let firstCard, secondCard; 

function flipCard() {
    this.classList.add('flip');
    
    if (!hasFlippedCard) {
        //this will be the first click of the game
        hasFlippedCard = true;
        firstCard = this;
    } else {
        //this will be the second click of the game
        hasFlippedCard = false;
        secondCard = this;
        
        //do the cards match?

        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            //cards match
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            //not a match
            setTimeout(() =>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            }, 1500);
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))