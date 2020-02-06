// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveTwoType, playerOneMoveThreeType, playerOneMoveOneValue, playerOneMoveTwoValue, playerOneMoveThreeValue;
// Player two
let playerTwoMoveOneType, playerTwoMoveTwoType, playerTwoMoveThreeType, playerTwoMoveOneValue, playerTwoMoveTwoValue, playerTwoMoveThreeValue;

// Winner of the overall game
let playerOneWins, playerTwoWins;

function isValidType(type){
  return (type === 'rock') || (type === 'paper') || (type === 'scissors')
}

function isValidValue(value){
  return (value >= 1 && value <= 99);
}

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

  // Check if values even exist
  if(!moveOneValue || !moveTwoValue || !moveThreeValue || !moveOneType || !moveTwoType || !moveThreeType){
    return;
  }

  // Check if the type is rock paper or scissors
  if (!isValidType(moveOneType) || !isValidType(moveTwoType) || !isValidType(moveThreeType)){
    return;
  }
  if (!isValidValue(moveOneValue) || !isValidValue(moveTwoValue) || !isValidValue(moveThreeValue)){
    return;
  }
  if((moveOneValue + moveTwoValue + moveThreeValue) > 99){
    return;
  }

  if(player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if(player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue){
  if(!playerOneMoveType  ||
     !playerOneMoveValue ||
     !playerTwoMoveType  ||
     !playerTwoMoveValue){
    return;
  }

  if(playerOneMoveType === playerTwoMoveType){
    if(playerOneMoveValue > playerTwoMoveValue){
      return 'Player One';
    } else if(playerOneMoveValue < playerTwoMoveValue){
      return 'Player Two';
    } else {
      return 'Tie';
    }
  } else if(playerOneMoveType === 'rock'){
    if(playerTwoMoveType === 'paper'){
      return 'Player Two';
    } else if(playerTwoMoveType === 'scissors'){
      return 'Player One';
    }
  } else if(playerOneMoveType === 'paper'){
    if(playerTwoMoveType === 'rock'){
      return 'Player One';
    } else if(playerTwoMoveType === 'scissors'){
      return 'Player Two';
    }
  } else if(playerOneMoveType === 'scissors'){
    if(playerTwoMoveType === 'paper'){
      return 'Player One';
    } else if(playerTwoMoveType === 'rock'){
      return 'Player Two';
    }
  }
}

function getRoundWinner(round) {
  // return 'Player One', 'Player Two', or 'Tie')
  if(!playerOneMoveOneType  ||
     !playerOneMoveOneValue ||
     !playerTwoMoveOneType  ||
     !playerTwoMoveOneValue){
    return null;
  }
  switch(round){
    case 1:
      return getMoveWinner(playerOneMoveOneType,
                          playerOneMoveOneValue,
                          playerTwoMoveOneType,
                          playerTwoMoveOneValue);
    case 2:
      return getMoveWinner(playerOneMoveTwoType,
                          playerOneMoveTwoValue,
                          playerTwoMoveTwoType,
                          playerTwoMoveTwoValue);
    case 3:
      return getMoveWinner(playerOneMoveThreeType,
                          playerOneMoveThreeValue,
                          playerTwoMoveThreeType,
                          playerTwoMoveThreeValue);
    default:
      return null;
  }
}

function addWinner(winner){
  if (winner === 'Player One'){
    playerOneWins = (playerOneWins + 1);
  } else if(winner === 'Player Two'){
    playerTwoWins = (playerTwoWins + 1);
  }
}

function getGameWinner() {
  if (!playerOneMoveOneType   || !playerOneMoveOneValue   ||
      !playerOneMoveTwoType   || !playerOneMoveTwoValue   ||
      !playerOneMoveThreeType || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType   || !playerTwoMoveOneValue   ||
      !playerTwoMoveTwoType   || !playerTwoMoveTwoValue   ||
      !playerTwoMoveThreeType || !playerTwoMoveThreeValue){
    return null;
  }

  playerOneWins = 0;
  playerTwoWins = 0;

  const round1 = getRoundWinner(1);
  const round2 = getRoundWinner(2);
  const round3 = getRoundWinner(3);

  addWinner(round1);
  addWinner(round2);
  addWinner(round3);

  if (playerOneWins > playerTwoWins){
    console.log(`Player one wins: ${playerOneWins}`);
    return 'Player One';
  } else if (playerOneWins < playerTwoWins){
    console.log(`Player two wins: ${playerTwoWins}`);
    return 'Player Two';
  } else {
    console.log('Tie');
    return 'Tie';
  }
}

function setMove(){
  const array = ['rock', 'paper', 'scissors'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

function setValue(max){
  return (Math.floor(Math.random() * Math.floor(max)));
}

function setComputerMoves() {
  playerTwoMoveOneType   = setMove();
  playerTwoMoveTwoType   = setMove();
  playerTwoMoveThreeType = setMove();

  playerTwoMoveOneValue   = setValue(97)
  playerTwoMoveTwoValue   = setValue(97 - playerTwoMoveOneValue);
  playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
}
