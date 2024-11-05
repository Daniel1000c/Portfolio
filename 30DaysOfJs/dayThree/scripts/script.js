//Declare variables firstName, lastName, country, city, age, ismarried, and year
let firstName = 'Daniel';
let lastName = 'Velez';
country = 'United States';
city = 'Cooper City';
age = 22;
isPersonMarried = false;
year = 2024;

//Use typeof operator to check data type
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isPersonMarried));
console.log(typeof(year));

console.log('10' == 10 );

//Create three truthy values
console.log(true);
console.log(4>3);
console.log(1<2);

//Create three falsy values
let randomNumber = NaN;
console.log(randomNumber > 2)
console.log(false);
console.log(0>2);

//Figure out boolean result from code
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');


//find the length of python and jargon make it a falsy statement
let lengthPhrase = 'python';
let lengthPhraseTwo = 'jargon'

console.log(lengthPhrase.length);
console.log(lengthPhraseTwo.length);

//Make statement falsy
console.log(lengthPhrase === lengthPhraseTwo);

//Find out boolean results
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));

//Use date object 
let now = new Date()
console.log(now.getFullYear());

//get month
console.log(now.getMonth());

//Check date
console.log(now.getDate());5


//Checkt hours
console.log(now.getHours());

//Check minutes
console.log(now.getMinutes());

//Exercise level 2

//Prompt user for script

//Create function
let userBase = prompt('Enter base:');
let userHeight = prompt('Enter height:');

alert(`The area of the triangle is ${0.5 * userBase * userHeight}`);

//Write script
let perimeter = sideA + sideB + sideC
let sideA = prompt('Enter side A:');
let sideB = prompt('Enter side B:');
let sideC = prompt('Enter side C:');
alert(`The perimeter of the triangle is ${perimeter}`);
10
5