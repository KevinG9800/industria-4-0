const cards = document.querySelectorAll('.memory-card');
const totalCards = cards.length;
let cardsFlipped = 0;

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
    startGame();
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

  cardsFlipped += 2;
  console.log(cardsFlipped)
  if (cardsFlipped === totalCards) {
    finishGame();
  }
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

// TIMER FUNCIONALITY

let timerInterval;
let startTime;

function startGame() {
    if (!startTime) {
        startTime = new Date().getTime();
        timerInterval = setInterval(updateTimer, 10);
    }
}

function updateTimer() {
    const now = new Date().getTime();
    const elapsedTime = now - startTime;

    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000));

    document.getElementById('timer').innerText =
        `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
}

function pad(number, length = 2) {
    return number.toString().padStart(length, '0');
}

function finishGame() {
  alert("Felicidades, ¡comlpetaste el juego!");
    clearInterval(timerInterval);
    
}


cards.forEach(card => card.addEventListener('click', flipCard));