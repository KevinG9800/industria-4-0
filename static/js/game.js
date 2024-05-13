const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    // First Click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // Second Click
  secondCard = this;

  checkForMatch();
}

// This function check for a card match using the data set stocked in on the HTML elements
function checkForMatch() {
  let isMatch = firstCard.dataset.concept === secondCard.dataset.concept;

  isMatch ? disableCards() : unflipCards();
}

// Disables the user to click again the cards already clicked
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

// Locks the position of the cards that matched
function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 2500);
}

// Resets all the dynamic variables involved in the game
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 6);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));