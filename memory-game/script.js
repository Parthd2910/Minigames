const symbols = ['🍎', '🍌', '🍓', '🍇', '🍊', '🍉', '🥝', '🍍'];
let cards = [...symbols, ...symbols]; // 2 of each symbol
let flippedCards = [];
let matchedCards = 0;

const gameBoard = document.getElementById('gameBoard');
const statusText = document.getElementById('status');

// Shuffle cards
cards.sort(() => 0.5 - Math.random());

// Create card elements
cards.forEach((symbol, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.symbol = symbol;
  card.dataset.index = index;
  card.innerHTML = '';
  card.addEventListener('click', flipCard);
  gameBoard.appendChild(card);
});

function flipCard() {
  if (flippedCards.length >= 2 || this.classList.contains('flipped') || this.classList.contains('matched')) return;

  this.classList.add('flipped');
  this.innerHTML = this.dataset.symbol;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    checkForMatch();
  }
}

function checkForMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.symbol === card2.dataset.symbol) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    matchedCards += 2;
    if (matchedCards === cards.length) {
      statusText.textContent = '🎉 You matched all cards!';
    }
    flippedCards = [];
  } else {
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1.innerHTML = '';
      card2.innerHTML = '';
      flippedCards = [];
    }, 1000);
  }
}
