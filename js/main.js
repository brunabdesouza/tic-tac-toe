console.log('Tic Tac Toe');

let currentPlayer = 'X';
let isWinner = false;
let movesCounter = 1;
let xWinCount = 0;
let oWinCount = 0;

$(document).ready(function() {

  //this function lets the player to restart the game, if it is finished or not.
  $('#reset').on('click', function() {

    currentPlayer = 'X';
    isWinner = false;
    movesCounter = 1;

    $('.board').empty();

  }); //end of resetGame function.



  //This click function allows the player to click on each square of the board  and where it counts how many moves they have played.
  $('.board').on('click', function() {

    //Conditions for the player to be able to click a square. If the square isn't 'X', isn't 'O', isWinner is not 'false' and the game hasn't reached the end the current player wins.
    if ($(this).html() !== 'X' && $(this).html() !== 'O' && !isWinner && movesCounter <= 9) {

      $(this).html(currentPlayer);

      if (currentPlayer === 'X') {
        win(currentPlayer);
        movesCounter++;
        currentPlayer = 'O';
      } else {
        win(currentPlayer);
        movesCounter++;
        currentPlayer = 'X';
      } //end of if(currentPlayer)

    } //end of if($(this).html()).

  }); //end of click handler




  // The win function has all conditions for each player to win the game and also if no one wins.
  const win = function(currentPlayer) {

    let gameOne = $('#box1').html();
    let gameTwo = $('#box2').html();
    let gameThree = $('#box3').html();
    let gameFour = $('#box4').html();
    let gameFive = $('#box5').html();
    let gameSix = $('#box6').html();
    let gameSeven = $('#box7').html();
    let gameEight = $('#box8').html();
    let gameNine = $('#box9').html();


    if (gameOne === currentPlayer && gameTwo === currentPlayer && gameThree === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (gameFour === currentPlayer && gameFive === currentPlayer && gameSix === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (gameSeven === currentPlayer && gameEight === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (gameOne === currentPlayer && gameFour === currentPlayer && gameSeven === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (gameTwo === currentPlayer && gameFive === currentPlayer && gameEight === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (gameThree === currentPlayer && gameSix === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (gameOne === currentPlayer && gameFive === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (gameThree === currentPlayer && gameFive === currentPlayer && gameSeven === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (movesCounter === 9) {
      console.log("it's a draw");

      if (movesCounter === 9) {
        $('#gameScore').html("It's a Draw!").fadeIn(2000);
      }

    } //end of if(movesCounter)




    // This condition shows on the board who won the game.
    if (isWinner === true) {
      $('#gameScore').html(`Player ${currentPlayer} Wins!`).fadeIn(2000);


      //This if condition counts the score points for each player
      if (currentPlayer === 'X') {
        xWinCount += 1;
        $('#scoreOne').html(`${xWinCount}`).fadeIn(3000);
      } else {
        oWinCount += 1;
        $('#scoreTwo').html(`${oWinCount}`).fadeIn(3000);
      } //end of (currentPlayer)

    } //end of if (isWinner)



  } //end of win function

}); //end of $(document).ready(function()).