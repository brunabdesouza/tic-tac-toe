console.log('Tic Tac Toe');

// Your app must:
//
// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select); your game should prevent users from playing a turn into a square that is already occupied
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript with jQuery for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices

let currentPlayer = 'X';
let isWinner = false;
let movesCounter = 1;
// let score = 0;

$(document).ready(function() {


  $('.board').on('click', function() {

    if ($(this).html() !== 'X' && $(this).html() !== 'O' && !isWinner && movesCounter <= 9) {
      $(this).html(currentPlayer);

      if (currentPlayer === 'X') {
        win(currentPlayer);
        movesCounter++;
        currentPlayer = 'O';
      } else {
        win(currentPlayer);
        movesCounter++;
        currentPlayer = 'X'
      } //end of if(currentPlayer)
    } //end of if($(this).html()).
  }); //end of click handler


  // $('#scoreOne').on('click', function() {
  //   $(this).
  //
  // });

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
      return
    } else if (gameFour === currentPlayer && gameFive === currentPlayer && gameSix === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
      return
    } else if (gameSeven === currentPlayer && gameEight === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
      return
    } else if (gameOne === currentPlayer && gameFour === currentPlayer && gameSeven === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
      return
    } else if (gameTwo === currentPlayer && gameFive === currentPlayer && gameEight === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
    } else if (gameThree === currentPlayer && gameSix === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
      return
    } else if (gameOne === currentPlayer && gameFive === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
      return
    } else if (gameThree === currentPlayer && gameFive === currentPlayer && gameSeven === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Wins`);
      return
    } else if (movesCounter === 9) {
      console.log("it's a draw");
    } //end of if

  } //end of function
}); //end of $(document).ready(function()).