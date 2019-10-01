// Your function(s) should go here that will interact with the webpage or DOM
// function submits user guess from id guessForm

let numBetweenOneAndOneHundred = Math.floor(Math.random() * 100) + 1
console.log(numBetweenOneAndOneHundred)

function showGuess(user_guess) {
  return alert("Your guess is ${user_guess}.")
}

function appendList(userGuess) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(userGuess);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

function getGuess() {
  let userGuess = document.getElementById("guess").value;
  if (userGuess == numBetweenOneAndOneHundred) {
    document.getElementById("changeableParagraph").innerHTML = `You guessed ${userGuess}...you saved the world!`;
    appendList(userGuess)
  } else if (userGuess < numBetweenOneAndOneHundred){
    document.getElementById("changeableParagraph").innerHTML = `You guessed ${userGuess}...the world is still in perile! Guess higher...`;
    appendList(userGuess)
    document.getElementById("guessfrm1").reset();
  } else if (userGuess > numBetweenOneAndOneHundred){
    document.getElementById("changeableParagraph").innerHTML = `You guessed ${userGuess}...the world is still in perile! Guess lower...`;
    appendList(userGuess);
    document.getElementById("guessfrm1").reset();
}

}

