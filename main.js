
// WIN CONDITIONS
var water = {
  name: 'Blastoise',
  img: ['/assets/blastoise-L.gif', '/assets/blastoise-R.gif']
}
var fire = {
  name: 'Charizard',
  img: ['/assets/charizard-L.gif', '/assets/charizard-R.gif']
}



var fireIcon3 = document.querySelector('#fire-icon-3');
var waterIcon3 = document.querySelector('#water-icon-3');
var grassIcon3 = document.querySelector('#grass-icon-3');

var fireIcon5 = document.querySelector('#fire-icon-5');
var waterIcon5 = document.querySelector('#water-icon-5');
var grassIcon5 = document.querySelector('#grass-icon-5');
var electricIcon5 = document.querySelector('#electri-icon-5');
var groundIcon5 = document.querySelector('#ground-icon-5');


var mainGameBoard = document.querySelector('#main-game');
var overlay = document.querySelector('.overlay');
var winOrLose = document.querySelector('#win-lose-display');
var leftSide = document.querySelector('#left-side');
var rightSide = document.querySelector('#right-side');

fireIcon3.addEventListener('click', choosePokemon);



function choosePokemon(){
  const game = new Game()
  game.player1.takeTurn();

  // conditional BUTTONS

  leftSide.innerHTML += 
  `<img class="pokemon-L" src="assets/charizard-L.gif"/>`


  
  computerRandom3()
}


function computerRandom3(){
  var rightSidePkmn = ['/assets/blastoise-R.gif', '/assets/charizard-R.gif', '/assets/venusaur-R.gif']
  var pkmn = rightSidePkmn[Math.floor(Math.random()*rightSidePkmn.length)]
  rightSide.innerHTML += 
  `<img src="${pkmn}"/>`
}




// connect to challenge mode section??????
function computerRandom5(){
  var rightSidePkmn = ['/assets/blastoise-R.gif', '/assets/charizard-R.gif', '/assets/venusaur-R.gif', '/assets/raichu-R.gif', '/assets/sandslash-R.gif']
  var pkmn = rightSidePkmn[Math.floor(Math.random()*rightSidePkmn.length)]
  rightSide.innerHTML += 
  `<img src="${pkmn}"/>`
}




