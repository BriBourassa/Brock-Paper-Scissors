class Player {
    constructor(name){
        this.name = name;
        this.wins = 0;
        this.loses = 0;
        this.pokemon = []
    }

    getRandomPokemon(num){
        this.pokemon.pop()
        var pkmn = pokemon[Math.floor(Math.random()*num)]
        this.pokemon.push(pkmn)
    }

    choosePokemon(icon){
        this.pokemon.pop()
        if(icon === 'fire-icon-3' || icon === 'fire-icon-5'){
            this.pokemon.push(pokemon[1])
            game.checkWinCondition()
    }  else if(icon === 'water-icon-3' || icon === 'water-icon-5') {
            this.pokemon.push(pokemon[0])
            game.checkWinCondition();
    } else if(icon === 'grass-icon-3' || icon === 'grass-icon-5') {
            this.pokemon.push(pokemon[2])
            game.checkWinCondition();
    } else if(icon === 'electric-icon-5') {
            this.pokemon.push(pokemon[3])
            game.checkWinCondition();
    } else if(icon === 'ground-icon-5') {
            this.pokemon.push(pokemon[4])
            game.checkWinCondition()
    }
    }
};