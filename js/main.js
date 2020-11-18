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

const boardGame = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['a', 'd', 'g'],
  ['b', 'e', 'h'],
  ['c', 'f', 'i'],
  ['a', 'e', 'i'],
  ['g', 'e', 'c']
];

let currentPlayer = 'X';

$(document).ready(function() {


  $('.board').on('click', function() {
    if ($(this).html() !== 'X' && $(this).html() !== 'O') {
      $(this).html(currentPlayer);

      if (currentPlayer === 'X') {
        currentPlayer = 'O';
      } else {
        currentPlayer = 'X'
      } //end of if(currentPlayer)
    } //end of if($(this).html()).



    //check to see if someone has won
    if ($('#box1').html() === 'X' && $('#box2').html() === 'X' && $('#box3').html() === 'X') {
      console.log('X Wins!');
    } else if ($('#box1').html() === 'O' && $('#box2').html() === 'O' && $('#box3').html() === 'O') {
      console.log('O Wins!');
    }

    if ($('#box4').html() === 'X' && $('#box5').html() === 'X' && $('#box6').html() === 'X') {
      console.log('X Wins!');
    } else if ($('#box4').html() === 'O' && $('#box5').html() === 'O' && $('#box6').html() === 'O') {
      console.log('O Wins!');
    }

    if ($('#box7').html() === 'X' && $('#box8').html() === 'X' && $('#box9').html() === 'X') {
      console.log('X Wins!');
    } else if ($('#box7').html() === 'O' && $('#box8').html() === 'O' && $('#box9').html() === 'O') {
      console.log('O Wins!');
    }

  }); //end of click handler


}); //end of $(document).ready(function()).