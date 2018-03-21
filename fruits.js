var fruits = ['apple', 'oranges', 'pears', 'apricots']

var i = 0;
var length = fruits.length;
var result = "";
for (; i < length; ) {
  result += 'i love '+ `${fruits[i]}<br>`;
  i += 1;
}
console.log(result)
