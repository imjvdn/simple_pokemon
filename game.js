//CALL WILD POKEMON
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

//CALL WILD POKEMON STATS

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
  wildPokemonHealth = Math.floor(Math.random() + wildPokemonLevel + 3);
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

//CALL PLAYER ATTACK
function selectMove() {
  var playerMove = prompt("You have 4 moves, " + moves[0].move + ", " + moves[1].move + ", " + moves[2].move + " and " + moves[3].move + ", which move do you want to use?").toUpperCase();
  if (playerMove === "") {
    selectMove();
  } else {
    switch (playerMove) {
      case "SLAM":
        playerMove = 0;
        callPlayerMoveDamage();
        playerAttack();
        break;
      case "HEADBUTT":
        playerMove = 1;
        callPlayerMoveDamage();
        playerAttack();
        break;
      case "TACKLE":
        playerMove = 2;
        callPlayerMoveDamage();
        playerAttack();
        break;
      case "CUT":
        playerMove = 3;
        callPlayerMoveDamage();
        playerAttack();
        break;
      default:
        alert('Move not found');
        selectMove();
        break;
        }
        }
        }

//WILD POKEMON ATTACK
function wildPokemonAttack() {
  if (pokemonHealth > 0) {
    pokemonHealth = pokemonHealth - damage;
    alert("Wild " + pokemonStats[wildPokemonId].type + " uses " + moves[moveId].move + " dealing " + damage + " damage!");
    attackLoop();
  } else {
    alert("Pokemon fainted");
  }
}

//PLAYER ATTACK
function playerAttack() {
  alert("Player uses " + moves[playerMove].move + " dealing " + damage + " damage!");
  if (wildPokemonHealth > 0) {
    wildPokemonHealth = wildPokemonHealth - damage;
    alert(pokemonStats[wildPokemonId].type + " has " + wildPokemonHealth + " health remaining!");
    playerTurn = false;
    wildPokemonFaint();
  } else {
    alert(pokemonStats[wildPokemonId].type + " fainted");
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
    alert(pokemonStats[wildPokemonId].type + " fainted! You win!");
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

