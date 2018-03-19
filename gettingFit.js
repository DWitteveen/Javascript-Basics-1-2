// Asking questions
var age = prompt('How old ar you ?')
var gender = prompt('Genger m/f ?')
var height = prompt('Height in cm ?')
var weight = prompt('weight in kg')
var exerciseLevel = prompt ('1. little or no exercise\n' +
                            '2. exercise/sports 1 - 3 times per week\n'+
                            '3. exercise/sports 4 - 5 times per week\n'+
                            '4. exercise/sports 6 - 7 times per week\n'+
                            '5. very hard exercise sports or physical job')


// Find BMI
var percentageWeightToHeight = weight / height;
var bmi = percentageWeightToHeight;
//Find the indeal weight
var idealWeight = Math.pow((0.5 * bmi + 11.5) * (height / 100.0), 2)

//Find BSR
var bmr = 10.0 * weight + 6.25 * height - 5.0 * age;

if (gender === 'm') {
  bmr += 5;
}
if (gender === 'f') {
  bmr -= 161;
}

// Calories per day add in %
switch (exerciseLevel) {
  case '1':
  caloriesPerDay *= 1.2;
    break;
  case '1':
  caloriesPerDay *= 1.375;
    break;
  case '1':
  caloriesPerDay *= 1.55;
    break;
  case '1':
  caloriesPerDay *= 1.725;
    break;
  case '1':
  caloriesPerDay *= 1.9;
    break;
}

var caloriesPerDay = bmr;
if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500
  dietWeeks = (weight - idealWeight) / 0.5
} else {
  dietCaloriesPerDay = caloriesPerDay + 500
  dietWeeks = (idealWeight - weight) / 0.5
}

document.write(`<ul><li>Your age is ${age}.</li><li> Your height is ${height}cm.</li><li>Your weight is ${weight}kg.</li>\n
                Your ideal weight is ${idealWeight}, your BMR is ${bmr}\n
                and your calories intake a day should be ${caloriesPerDay}</ul>`);
