class Game{
    constructor(){
        this.player1 = new Player('trainer1');
        this.player2 = new Player('trainer2');
      
    }

 




    startNewGame(){
        var timeout = setTimeout(winOrLose, 3000)
        overlay.classList.remove('hidden')
        mainGameBoard.classList.add('hidden')


        // hide/add hidden class to the things
        // time out - 3 sec
    }


   



 
    // way to keep track of the data for the game board (which pkmn out? OR JUST WHICH PKMN)
    // way to keep track of the selected game type (3 or 5)
    // way to check the Game's board data for win condition (type weakness etc)
    // a way to detect when a game is a draw
    // a way to reset the board and start new game

};

