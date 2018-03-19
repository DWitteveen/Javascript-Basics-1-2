var tempNow = prompt("What is the current temperature?")
if (tempNow < 5) {
  document.write('Parka weather');
} else if (tempNow > 4 && tempNow < 18) {
  document.write('Jacket weather');
} else {
  document.write('T-shirt weather');
}


var oddOrEven = prompt('Insert number')
if (oddOrEven%2 === 0) {
    document.write(' even ');
  } else {
    document.write(' odd ');
  }

var ask = prompt("What is your favorite programming language?")
if (ask.toUpperCase()  === "JAVASCRIPT") {
  document.write('I love Javascript');
} else if (ask.toUpperCase() === "PHP") {
  document.write('I kinda not love PHP')
} else {
  document.write('Sorry, I mostly like JavaScript!')
}
