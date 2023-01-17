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
        if(this.winConditions[this.player1.pokemon[0].name].includes(this.player2.pokemon[0].name)){
            displayWin()
            this.player1.wins++
            this.player2.losses++
        } else if(this.player1.pokemon[0].name === this.player2.pokemon[0].name){
            displayDraw()
        } else {
            displayLose()
            this.player1.losses++
            this.player2.wins++
        }
    }   
    startNewBattle(){
        if(currentGameMode === 'classic'){
            showClassicMode()
        } else {
            showChallengeMode()
        }
    }
    clearBoard(){
        this.player1.wins = 0
        this.player1.losses = 0
        this.player2.wins = 0
        this.player2.losses = 0
    }
};

