class Game{
    constructor(){
        this.player1 = new Player('trainer1');
        this.player2 = new Player('trainer2');
        this.winConditions = {
            Charizard: ['Venusaur','Raichu' ],
            Blastoise: ['Charizard', 'Sandslash'],
            Venusaur: ['Blastoise', 'Sandslash'],
            Raichu: ['Blastoise', 'Venusaur'],
            Sandslash: ['Charizard', 'Raichu']
        }
    }


        checkWinCondition(){
        console.log(this.player1.pokemon)
        console.log(this.player2.pokemon)

        if(this.winConditions[this.player1.pokemon[0].name].includes(this.player2.pokemon[0].name)){
            displayWin()
            this.player1.wins++
            this.player2.loses++
            
            console.log('player 1 wins');
            return 'player1 wins!!'
            
        } else if(this.player1.pokemon[0].name === this.player2.pokemon[0].name){
            displayDraw()
            console.log('draw');
            return "draw"
        } else {
            displayLose()
            this.player1.loses++
            this.player2.wins++
            console.log('you lose');
            return 'you lose you get NOTHING'
        }
    }   




    // startNewGame(){
    //     var timeout = setTimeout(winOrLose, 3000)
    //     overlay.classList.remove('hidden')
    //     mainGameBoard.classList.add('hidden')


    //     // hide/add hidden class to the things
    //     // time out - 3 sec
    // }


   



 
    // way to keep track of the data for the game board (which pkmn out? OR JUST WHICH PKMN)
    // way to keep track of the selected game type (3 or 5)
    // way to check the Game's board data for win condition (type weakness etc)
    // a way to detect when a game is a draw
    // a way to reset the board and start new game

};

