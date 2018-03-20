var tempNow = prompt(`What is the current temperature?`)
if (tempNow < 5) {
  document.write(`Parka weather<br>`);
} else if (tempNow > 4 && tempNow < 18) {
  document.write(`Jacket weather`);
} else {
  document.write(`T-shirt weather`);
}


var oddOrEven = prompt(`Insert number`)
if (oddOrEven%2 === 0) {
    document.write(` even<br> `);
  } else {
    document.write(` odd<br> `);
  }

var ask = prompt(`What is your favorite programming language?`)
if (ask.toUpperCase()  === "JAVASCRIPT") {
  document.write(`I love Javascript<br>`);
} else if (ask.toUpperCase() === `PHP`) {
  document.write(`I kinda not love PHP<br>`)
} else {
  document.write(`Sorry, I mostly like JavaScript!<br>`)
}
