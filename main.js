
var pokemon = [
  water = {
    name: 'Blastoise',
    img: ['/assets/blastoise-L.gif', '/assets/blastoise-R.gif'],
    winAgainst: 'Charizard',
    loseAgainst: 'Venusaur',
  },
  fire = {
    name: 'Charizard',
    img: ['/assets/charizard-L.gif', '/assets/charizard-R.gif'],
    winAgainst: 'Venusaur',
    loseAgainst: 'Blastoise',
  },
  grass = {
    name: 'Venusaur',
    img: ['/assets/venusaur-L.gif', '/assets/venusaur-R.gif'],
    winAgainst: 'Blastoise',
    loseAgainst: 'Charizard',
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

var fireIcon3 = document.getElementById('fire-icon-3');
var waterIcon3 = document.getElementById('water-icon-3');
var grassIcon3 = document.getElementById('grass-icon-3');

var fireIcon5 = document.querySelector('#fire-icon-5');
var waterIcon5 = document.querySelector('#water-icon-5');
var grassIcon5 = document.querySelector('#grass-icon-5');
var electricIcon5 = document.querySelector('#electric-icon-5');
var groundIcon5 = document.querySelector('#ground-icon-5');


var mainGameBoard = document.querySelector('#main-game');
var overlay = document.querySelector('.overlay');
var winOrLose = document.querySelector('#win-lose-display');
var leftSide = document.querySelector('#left-side');
var rightSide = document.querySelector('#right-side');
var winLoseDisplay = document.querySelector('#win-lose-display')

fireIcon3.addEventListener('click', choosePokemon);
waterIcon3.addEventListener('click', choosePokemon);
grassIcon3.addEventListener('click', choosePokemon);
fireIcon5.addEventListener('click', choosePokemon);
waterIcon5.addEventListener('click', choosePokemon);
grassIcon5.addEventListener('click', choosePokemon);
electricIcon5.addEventListener('click', choosePokemon);
groundIcon5.addEventListener('click', choosePokemon);

const game = new Game()

function show(element) {
  element.classList.remove('hidden');
};
function hide(element) {
  element.classList.add('hidden');
};

function displayWin(){
  winLoseDisplay.innertext 
 
};

function displayLose(){

};

function displayDraw(){

};



function choosePokemon(){
  if(this.id === 'fire-icon-3' || this.id === 'fire-icon-5'){
    game.player1.pokemon.push(pokemon[1])
    game.player1.takeTurn();
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/charizard-L.gif"/>`
    computerRandom(3)
    console.log(game.player1.pokemon)
  } else if(this.id === 'water-icon-3' || this.id === 'water-icon-5') {
    game.player1.pokemon.push(pokemon[0])
    game.player1.takeTurn();
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/blastoise-L.gif"/>`
    computerRandom(3)
    console.log(game.player1.pokemon)
  } else if(this.id === 'grass-icon-3' || this.id === 'grass-icon-5') {
    game.player1.pokemon.push(pokemon[2])
    game.player1.takeTurn();
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/venusaur-L.gif"/>`
    computerRandom(3)
    console.log(game.player1.pokemon)
  } else if(this.id === 'electric-icon-5') {
    game.player1.pokemon.push(pokemon[3])
    game.player1.takeTurn();
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/raichu-L.gif"/>`
    computerRandom(5)
    console.log(game.player1.pokemon)
  } else if(this.id === 'ground-icon-5') {
    game.player1.pokemon.push(pokemon[4])
    game.player1.takeTurn();
    leftSide.innerHTML += 
    `<img class="pokemon-L" src="assets/sandslash-L.gif"/>`
    computerRandom(5)
    console.log(game.player1.pokemon)
  } 
};

function computerRandom(num){
  var pkmn = pokemon[Math.floor(Math.random()*num)]
  rightSide.innerHTML += 
  `<img src="${pkmn.img[1]}"/>`
  game.player2.pokemon.push(pkmn)
  console.log(game.player2.pokemon)
};



// takeTurn() {
//   if(this.player1.pokemon[0].name === 'Venusaur' && this.player2.pokemon[0].name === 'Blastoise'){
//       this.player1.wins++
//       this.player2.loses++
//       console.log('venusaur wins')
//       //should do innertext? cant manipulate dom in class tho
//   } else if(this.player1.pokemon.name === 'Blastoise' && this.player2.pokemon.name === 'Charizard'){
//       this.player1.wins++
//       this.player2.loses++
//       console.log('blastoise wins');
//   } else if(this.player1.pokemon.name === 'Charizard' && this.player2.pokemon.name === 'Venusaur'){
//       this.player1.wins++
//       this.player2.loses++
//       console.log('charizard wins');
//   } else if(this.player1.pokemon.name === 'Blastoise' && this.player2.pokemon.name === 'Venusaur'){
//       this.player1.loses++
//       this.player2.wins++
//   } else {
//     return;
//   }



//   hide(overlay)
//   show(mainGameBoard)
//   // overlay.classList.add('hidden') 
//   // mainGameBoard.classList.remove('hidden')
  

// };






// function checkWinConditions(){
//   if(player.pokemon === 'Charizard'){
//     return 
//   }
// }




// connect to challenge mode section??????
function computerRandom5(){
  var rightSidePkmn = ['/assets/blastoise-R.gif', '/assets/charizard-R.gif', '/assets/venusaur-R.gif', '/assets/raichu-R.gif', '/assets/sandslash-R.gif']
  var pkmn = rightSidePkmn[Math.floor(Math.random()*rightSidePkmn.length)]
  rightSide.innerHTML += 
  `<img src="${pkmn}"/>`
}




