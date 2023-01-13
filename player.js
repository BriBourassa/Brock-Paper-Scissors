class Player {
    constructor(name){
        this.name = name;
        this.wins = 0;
        this.loses = 0;
        this.pokemon = []
    }

    // this does not update wins/loses in data model 
    takeTurn(){
        if(game.player1.pokemon[0].name === 'Venusaur' && game.player2.pokemon[0].name === 'Blastoise'){
            this.player1.wins++
            this.player2.loses++
            console.log(this.player1.pokemon[0].name)
        } else if(game.player1.pokemon.name === 'Blastoise' && game.player2.pokemon.name === 'Charizard'){
            this.player1.wins++
            this.player2.loses++
            console.log('blastoise wins');
        } else if(game.player1.pokemon.name === 'Charizard' && game.player2.pokemon.name === 'Venusaur'){
            this.player1.wins++
            this.player2.loses++
            console.log('charizard wins');
        } else if(game.player1.pokemon.name === 'Blastoise' && game.player2.pokemon.name === 'Venusaur'){
            this.player1.loses++
            this.player2.wins++
        } 
       
    
        hide(overlay)
        show(mainGameBoard)
        // overlay.classList.add('hidden') 
        // mainGameBoard.classList.remove('hidden')
        
      
        console.log(this.wins)
        console.log(this.loses)
    }
    

};