//var person = {
//  firstName: 'Rembert',
//  lastName: 'Boom'
//}

//console.log(`Hello, I am ${person.firstName} ${person.lastName}`);


var student = {
  firstName: 'David',
  age: 28,
  printAgeInMonths: function () {
  return student.age * 12;
},
  printAgeInDays: function () {
    return student.printAgeInDays * 30;
  }
}




console.log (`I am ${student.firstName} and I am ${student.age}, or ${student.printAgeInMonths()} months old`);
console.log (student.printAgeInDays());
