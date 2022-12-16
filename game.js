// Define the prompt function
const prompt = require('prompt-sync')();

// Other code goes here...

// Define the WildPokemon constructor
function WildPokemon(type) {
  this.type = type;
}

//POKEMON ARRAY
var pokemonStats = [];
pokemonStats[0] = new WildPokemon("Zubat");
pokemonStats[1] = new WildPokemon("Oddish");
pokemonStats[2] = new WildPokemon("Geodude");
pokemonStats[3] = new WildPokemon("Slowpoke");

//POKEMON ATTACK ARRAY
function Move(move, basedmg) {
  this.move = move;
  this.basedmg = basedmg;
}

var moves = [];
moves[0] = new Move("Slam", 5);
moves[1] = new Move("Headbutt", 4);
moves[2] = new Move("Tackle", 3);
moves[3] = new Move("Cut", 4);

//CALL WILD POKEMON ID
var wildPokemonId;
function callWildPokemonId() {
  wildPokemonId = Math.floor(Math.random() * pokemonStats.length);
}

//CALL WILD POKEMON LEVEL
var wildPokemonLevel;
function callWildPokemonLevel() {
  wildPokemonLevel = Math.floor(Math.random() * 6 + 1);
}

//CALL WILD POKEMON HEALTH    
var wildPokemonHealth;
function callWildPokemonHealth() {
  wildPokemonHealth = Math.floor(Math.random() * (wildPokemonLevel + 3) + 1);
}

//CALL WILD POKEMON ATTACK
var moveId;
function callMoveId() {
  moveId = Math.floor(Math.random() * moves.length);
}

//CALL DAMAGE 
var damage;

//CALL WILD POKEMON ATTACK DAMAGE
function callMoveDamage() {
  damage = Math.floor(Math.random() * moves[callMoveId()].basedmg + 3);
}

//CALL PLAYER ATTACK DAMAGE
function callPlayerMoveDamage() {
  damage = Math.floor(Math.random() * moves[playerMove].basedmg + 3);
}

// Use the prompt function
function selectMove() {
  let playerMove = prompt("You have 4 moves, " + moves[0].move + ", " + moves[1].move + ", " + moves[2].move + " and " + moves[3].move + ", which move do you want to use?").toUpperCase();
  if (playerMove === "") {
    selectMove();
  } else {
    let moveIndex;
    switch (playerMove) {
      case "SLAM":
        moveIndex = 0;
        break;
      case "HEADBUTT":
        moveIndex = 1;
        break;
      case "TACKLE":
        moveIndex = 2;
        break;
      case "CUT":
        moveIndex = 3;
        break;
      default:
        console.log('Move not found');
        selectMove();
        break;
    }
    callPlayerMoveDamage(moveIndex);
    playerAttack(moveIndex);
  }
}

//CALL PLAYER ATTACK DAMAGE
function callPlayerMoveDamage(moveIndex) {
  damage = Math.floor(Math.random() * moves[moveIndex].basedmg + 3);
}

//WILD POKEMON ATTACK
function wildPokemonAttack() {
  if (wildPokemonHealth > 0) {
    wildPokemonHealth = wildPokemonHealth - damage;
    console.log("Wild " + pokemonStats[wildPokemonId].type + " uses " + moves[moveId].move + " dealing " + damage + " damage!");
    console.log(pokemonStats[wildPokemonId].type + " has " + wildPokemonHealth + " health remaining!");
    playerTurn = true;
    wildPokemonFaint();
  } else {
    console.log("Pokemon fainted");
  }
}

//PLAYER ATTACK
function playerAttack(moveIndex) {
  console.log("Player uses " + moves[moveIndex].move + " dealing " + damage + " damage!");
  if (wildPokemonHealth > 0) {
    wildPokemonHealth = wildPokemonHealth - damage;
    console.log(pokemonStats[wildPokemonId].type + " has " + wildPokemonHealth + " health remaining!");
    playerTurn = false;
    wildPokemonFaint();
  } else {
    console.log(pokemonStats[wildPokemonId].type + " fainted");
  }
}

//RANDOMIZE WILD POKEMON
function randomPokemon() {
  callWildPokemonId();
  callWildPokemonHealth();
  callWildPokemonLevel();
  callMoveId();
}

//FAINTED WILD POKEMON
function wildPokemonFaint() {
  if (wildPokemonHealth <= 0) {
    console.log(pokemonStats[wildPokemonId].type + " fainted! You win!");
  } else {
    wildPokemonAttack();
  }
}

//MAIN BATTLE LOOP
function attackLoop() {
  if (playerTurn === true) {
    selectMove();
  } else if (playerTurn === false) {
    wildPokemonAttack();
  }
}

//START GAME
function startGame() {
  randomPokemon();
  playerTurn = true;
  attackLoop();
}

startGame();
