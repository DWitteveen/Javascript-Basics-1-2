var age = prompt("hoe oud ben je?")
var gender = prompt("Wat is je geslacht? m of f")
var height = prompt("Hoe lang ben je ...cm? ")
var weight = prompt("Hoe zwaar ben je? .. kg>?")
var exerciseLevel = prompt ("Sport je: 1. weinig tot niets\n " +
                                        "2. 1 - 3 keer per week\n " +
                                        "3. 4 - 5 keer per week\n " +
                                        "4. 6 -7  keer per week\n " +
                                        "5. Meer dan bovenstaande\n ");

var percentageWeightToHeight = weight / (height / 100);
var bmi = weight/Math.pow((height/100), 2);
var idealWeight = Math.pow((0.5 * bmi + 11.5) * (height / 100.0), 2)
var bmr = 10.0 * weight + 6.25 * height - 5.0 * age;
if (gender === 'm') {
  bmr += 5;
}
if (gender === 'f') {
  bmr -= 161;
}

var caloriesPerDay = bmr;
if (weight > idealWeight) {
  dietCaloriesPerDay = caloriesPerDay - 500
  dietWeeks = (weight - idealWeight) / 0.5
} else {
  dietCaloriesPerDay = caloriesPerDay + 500
  dietWeeks = (idealWeight - weight) / 0.5
}

document.write(`Je ideale gewicht is ${idealWeight} test' )
