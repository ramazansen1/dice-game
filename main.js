const player1 = document.querySelector("h1");
const player2 = document.querySelector("h1");
const draw = document.querySelector("h1");

// player 1
var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6

var randomImageSource = "images/dice" + randomNumber + ".png"; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource); // update with random img

// player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

function winner() {
  // Player 1 wins
  if (randomNumber > randomNumber2) {
    return (player1.innerHTML = "🚩Player 1 wins!");
  } // Player 2 wins
  else if (randomNumber < randomNumber2) {
    return (player2.innerHTML = "🚩Player 2 wins!");
  } else {
    return (draw.innerHTML = "Draw!");
  }
}

setTimeout(winner, 1000);
