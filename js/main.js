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
// Use semantic markup for HTML and CSS (adhere to best practices)
//
const gameOptions = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['a', 'd', 'g'],
  ['b', 'e', 'h'],
  ['c', 'f', 'i'],
  ['a', 'e', 'i'],
  ['g', 'e', 'c']
];

const matchSquare = function() {


  for (let i = 0; i < gameOptions.length; i++) {
    for (let j = 0; j < gameOptions[i].length; j++) {


    } //end of for loop j
  } //end of for loop i
} //end of matchSquare function()



let currentPlayer = 'X';
let isWinner = false;

$(document).ready(function() {


  $('.board').on('click', function() {

    if ($(this).html() !== 'X' && $(this).html() !== 'O' && !isWinner) {
      $(this).html(currentPlayer);

      if (currentPlayer === 'X') {
        win(currentPlayer);
        currentPlayer = 'O';
      } else {
        win(currentPlayer);
        currentPlayer = 'X'
      } //end of if(currentPlayer)
    } //end of if($(this).html()).









    //check to see if someone has won
    // if ($('#box1').html() === 'X' && $('#box2').html() === 'X' && $('#box3').html() === 'X') {
    //   console.log('X Wins!');
    // }
    // } else if ($('#box1').html() === 'O' && $('#box2').html() === 'O' && $('#box3').html() === 'O') {
    //   console.log('O Wins!');
    // }
    //
    // if ($('#box4').html() === 'X' && $('#box5').html() === 'X' && $('#box6').html() === 'X') {
    //   console.log('X Wins!');
    // } else if ($('#box4').html() === 'O' && $('#box5').html() === 'O' && $('#box6').html() === 'O') {
    //   console.log('O Wins!');
    // }
    //
    // if ($('#box7').html() === 'X' && $('#box8').html() === 'X' && $('#box9').html() === 'X') {
    //   console.log('X Wins!');
    // } else if ($('#box7').html() === 'O' && $('#box8').html() === 'O' && $('#box9').html() === 'O') {
    //   console.log('O Wins!');
    // }

  }); //end of click handler

  const win = function(currentPlayer, draw) {

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
      console.log(`${currentPlayer} Win`);
      return
    } else if (gameFour === currentPlayer && gameFive === currentPlayer && gameSix === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Win`);
      return
    } else if (gameSeven === currentPlayer && gameEight === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Win`);
      return
    } else if (gameOne === currentPlayer && gameFour === currentPlayer && gameSeven === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Win`);
      return
    } else if (gameTwo === currentPlayer && gameFive === currentPlayer && gameEight === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Win`);
    } else if (gameThree === currentPlayer && gameSix === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Win`);
      return
    } else if (gameOne === currentPlayer && gameFive === currentPlayer && gameNine === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Win`);
      return
    } else if (gameThree === currentPlayer && gameFive === currentPlayer && gameSeven === currentPlayer) {
      isWinner = true;
      console.log(`${currentPlayer} Win`);
      return
    } else if (isWinner === false) {
      console.log("It's a draw")
      return
    }
  } //end of function
}); //end of $(document).ready(function()).