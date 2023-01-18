
var pokemon = [
  water = {
    name: 'Blastoise',
    img: ['/assets/blastoise-L.gif', 'assets/blastoise-R.gif'],
  },
  fire = {
    name: 'Charizard',
    img: ['/assets/charizard-L.gif', 'assets/charizard-R.gif'],
  },
  grass = {
    name: 'Venusaur',
    img: ['/assets/venusaur-L.gif', 'assets/venusaur-R.gif'],
  },
  electric = {
    name: 'Raichu',
    img: ['/assets/raichu-L.gif', 'assets/raichu-R.gif']
  },
  ground = {
    name: 'Sandslash',
    img: ['/assets/sandslash-L.gif', 'assets/sandslash-R.gif']
  },
];

var fireIcon3 = document.querySelector('#fire-icon-3');
var waterIcon3 = document.querySelector('#water-icon-3');
var grassIcon3 = document.querySelector('#grass-icon-3');

var fireIcon5 = document.querySelector('#fire-icon-5');
var waterIcon5 = document.querySelector('#water-icon-5');
var grassIcon5 = document.querySelector('#grass-icon-5');
var electricIcon5 = document.querySelector('#electric-icon-5');
var groundIcon5 = document.querySelector('#ground-icon-5');

var mainGameBoard = document.querySelector('#main-game');

var overlay = document.querySelector('.overlay');

var leftSide = document.querySelector('#left-side');
var rightSide = document.querySelector('#right-side');
var winLoseDraw = document.querySelector('#win-lose-draw');

var classicOverlay = document.querySelector('.classic-overlay');
var challengeOverlay = document.querySelector('.challenge-overlay');

var playerWins = document.getElementById('player-wins');
var playerLosses = document.getElementById('player-losses');
var computerWins = document.getElementById('computer-wins');
var computerLosses = document.getElementById('computer-losses');

var leftPokemon = document.getElementById('left-pkmn')
var rightPokemon = document.getElementById('right-pkmn')

var classicModeContainer = document.querySelector('.classic-mode-container');
var challengeModeContainer = document.querySelector('.challenge-mode-container');
var mainMenu = document.querySelector('.main-menu-container');
var returnToMainMenuFromClassic = document.getElementById('return-btn-classic');
var returnToMainMenuFromChallenge = document.getElementById('return-btn-challenge')
var returnToMainMenu = document.querySelector('.return-to-main')

fireIcon3.addEventListener('click', startBattle);
waterIcon3.addEventListener('click', startBattle);
grassIcon3.addEventListener('click', startBattle);

fireIcon5.addEventListener('click', startBattle);
waterIcon5.addEventListener('click', startBattle);
grassIcon5.addEventListener('click', startBattle);
electricIcon5.addEventListener('click', startBattle);
groundIcon5.addEventListener('click', startBattle);

const game = new Game()
var currentGameMode = null;

window.addEventListener('load', function(){
  if(game.player1.retrieveWinsFromStorage('player1wins') !== null && game.player1.retrieveWinsFromStorage('player1losses') !== null && game.player2.retrieveWinsFromStorage('player2wins') !== null && game.player2.retrieveWinsFromStorage('player2losses') !== null){
game.player1.wins = game.player1.retrieveWinsFromStorage('player1wins')
game.player1.losses = game.player1.retrieveWinsFromStorage('player1losses')
game.player2.wins = game.player2.retrieveWinsFromStorage('player2wins')
game.player2.losses = game.player2.retrieveWinsFromStorage('player2losses')
  }
});

classicModeContainer.addEventListener('click', function(){
  hide(overlay)
  show(classicOverlay)
  currentGameMode = 'classic'
});

challengeModeContainer.addEventListener('click', function(){
  hide(overlay)
  show(challengeOverlay)
  currentGameMode = 'challenge'
});

returnToMainMenuFromClassic.addEventListener('click', function(){
  show(mainMenu)
  hide(classicOverlay)
  game.clearBoard()
});

returnToMainMenuFromChallenge.addEventListener('click', function(){
  show(mainMenu)
  hide(challengeOverlay)
  game.clearBoard()
});

function show(element) {
  element.classList.remove('hidden');
};
function hide(element) {
  element.classList.add('hidden');
};

function displayWin(){
  winLoseDraw.innerHTML =
  `<p class="win">YOU WIN</p>`
};

function displayLose(){
  winLoseDraw.innerHTML =
  `<p class="lose">YOU LOSE</p>`
};

function displayDraw(){
  winLoseDraw.innerHTML =
  `<p class="draw">DRAW</p>`
};

function clearWinLoseDrawDisplay(){
  winLoseDraw.innerHTML =
  `<p></p>`
};

function startBattle(event){
  selectPokemon(event);
  game.player1.choosePokemon(event.target.id);
  showMainGameBoard();
  updateGameScore();
  setTimeout(game.startNewBattle, 3000);
};

function selectPokemon(event){
  if(event.target.id === 'fire-icon-3' || event.target.id === 'fire-icon-5' ){
    leftPokemon.src="assets/charizard-L.gif"
    computerRandom(3)
  } else if(event.target.id === 'water-icon-3' || event.target.id === 'water-icon-5') {
    leftPokemon.src="assets/blastoise-L.gif"
    computerRandom(3)
  } else if(event.target.id === 'grass-icon-3' || event.target.id === 'grass-icon-5') {
    leftPokemon.src="assets/venusaur-L.gif"
    computerRandom(3)
  } else if(event.target.id === 'electric-icon-5') {
    leftPokemon.src="assets/raichu-L.gif"
    computerRandom(5)
  } else if(event.target.id === 'ground-icon-5') {
    leftPokemon.src="assets/sandslash-L.gif"
    computerRandom(5)
  } 
};

function computerRandom(num){
  game.player2.getRandomPokemon(num)
  rightPokemon.src=`${game.player2.pokemon[0].img[1]}`
};

function showClassicMode(){
  hide(mainGameBoard);
  hide(challengeOverlay);
  show(classicOverlay);
  clearWinLoseDrawDisplay()
};

function showChallengeMode(){
  hide(mainGameBoard);
  hide(classicOverlay);
  show(challengeOverlay);
  clearWinLoseDrawDisplay()
};

function showMainGameBoard(){
  hide(overlay)
  hide(classicOverlay)
  hide(challengeOverlay)
  show(mainGameBoard)
};

function updateGameScore(){
  playerWins.innerHTML = `WINS: ${game.player1.wins}`
  playerLosses.innerHTML = `LOSSES: ${game.player1.losses}`
  computerWins.innerHTML = `WINS: ${game.player2.wins}`
  computerLosses.innerHTML = `LOSSES: ${game.player2.losses}`
};
