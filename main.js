
var pokemon = [
  water = {
    name: 'Blastoise',
    img: ['/assets/blastoise-L.gif', '/assets/blastoise-R.gif'],
  },
  fire = {
    name: 'Charizard',
    img: ['/assets/charizard-L.gif', '/assets/charizard-R.gif'],
  },
  grass = {
    name: 'Venusaur',
    img: ['/assets/venusaur-L.gif', '/assets/venusaur-R.gif'],
  },
  electric = {
    name: 'Raichu',
    img: ['/assets/raichu-L.gif', '/assets/raichu-R.gif']
  },
  ground = {
    name: 'Sandslash',
    img: ['/assets/sandslash-L.gif', '/assets/sandslash-R.gif']
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
// var winOrLose = document.querySelector('#win-lose-display');

var leftSide = document.querySelector('#left-side');
var rightSide = document.querySelector('#right-side');
var winLoseDraw = document.querySelector('#win-lose-draw')


var classicOverlay = document.querySelector('.classic-overlay')
var challengeOverlay = document.querySelector('.challenge-overlay')


var classicModeContainer = document.querySelector('.classic-mode-container')
var challengeModeContainer = document.querySelector('.challenge-mode-container')
var mainMenu = document.querySelector('.main-menu')

classicModeContainer.addEventListener('click', function(){
  hide(mainMenu)
  hide(overlay)
  show(classicOverlay)
})

challengeModeContainer.addEventListener('click', function(){
  hide(mainMenu)
  hide(overlay)
  show(challengeOverlay)
})



fireIcon3.addEventListener('click', startBattle);
waterIcon3.addEventListener('click', startBattle);
grassIcon3.addEventListener('click', startBattle);

fireIcon5.addEventListener('click', startBattle);
waterIcon5.addEventListener('click', startBattle);
grassIcon5.addEventListener('click', startBattle);
electricIcon5.addEventListener('click', startBattle);
groundIcon5.addEventListener('click', startBattle);

const game = new Game()

function show(element) {
  element.classList.remove('hidden');
};
function hide(element) {
  element.classList.add('hidden');
};

// setTimeout(() => {
//       displayWin()
// }, 3000);


// need a timer for return to menu screen - 
//
// main menu- CHOOSE MODE 
// make two mini-menu screens, one for classic and one for challenge
// need return to MAIN menu screen
// need to change the displayed wins/loses (innertext)


function displayWin(){
  winLoseDraw.innerHTML +=
  `<p class="win">YOU WIN</p>`
};

function displayLose(){
  winLoseDraw.innerHTML +=
  `<p class="lose">YOU LOSE</p>`
};

function displayDraw(){
  winLoseDraw.innerHTML +=
  `<p class="draw">DRAW</p>`
};

function startBattle(event){
  if(event.target.id === 'fire-icon-3' || event.target.id === 'fire-icon-5' ){
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/charizard-L.gif"/>`
    computerRandom(3)
    // console.log(game.player1.pokemon)
  } else if(event.target.id === 'water-icon-3' || event.target.id === 'water-icon-5') {
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/blastoise-L.gif"/>`
    computerRandom(3)
    // console.log(game.player1.pokemon)
  } else if(event.target.id === 'grass-icon-3' || event.target.id === 'grass-icon-5') {
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/venusaur-L.gif"/>`
    computerRandom(3)
    // console.log(game.player1.pokemon)
  } else if(event.target.id === 'electric-icon-5') {
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/raichu-L.gif"/>`
    computerRandom(5)
    // console.log(game.player1.pokemon)
  } else if(event.target.id === 'ground-icon-5') {
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/sandslash-L.gif"/>`
    computerRandom(5)
    // console.log(game.player1.pokemon)
  } 
  game.player1.choosePokemon(event.target.id)
  hide(overlay)
  hide(classicOverlay)
  hide(challengeOverlay)
  show(mainGameBoard)
};



function computerRandom(num){
  game.player2.getRandomPokemon(num)
  rightSide.innerHTML += 
  `<img class="pokemon-R" src="${game.player2.pokemon[0].img[1]}"/>`
  // console.log(game.player2.pokemon)
};







