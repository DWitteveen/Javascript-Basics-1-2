/*var recipe = ['cut and bake vegetables in a frying pan<br>',
'stir 6 eggs and 100 gram of ricotta<br>',
'add ricotta to the baked vegetables<br>',
'after 5 minutes, turn frittata, sprinkle parmaggiano over it<br>',
'bake frittata, under a cover, and in the oven for 8 minutes<br>'], result = ''

recipe.forEach(function(steps) {
  result += `: ${steps}`
})

console.log(result)
document.write(result)*/

var languages = ['Javascript ', 'HTML ', 'CSS '];
var result = '';

languages.forEach(function(language) {
  result += `${language}`;
})

console.log(result);
