// declare variable challenge
let challenge = '30 Days of JavaScript';

//Print string out
console.log(challenge);

//Print out the length of the string
console.log(challenge.length);

//Change challenge variable to uppercase
console.log(challenge.toUpperCase());

//Change challenge variable to lowercase
console.log(challenge.toLowerCase());

//Cut the first word of the string
console.log(challenge.substring(2,21));

//Cut out the phrase days of javascript
console.log(challenge.substring(0,2));

//Check to see if string has a word script using include
console.log(challenge.includes('Script'));

//Split the string into the array
console.log(challenge.split());

//Split the string into spaces
console.log(challenge.split(' '));

//Check the character at index 15
console.log(challenge.charAt(15));

//Check the character code of J
console.log(challenge.charCodeAt('J'));

//Check the first index of a in challenge
console.log(challenge.indexOf('a'));

//Check the last position of a in challenge
console.log(challenge.lastIndexOf('a'));

//Use a index of selection for sentence
let sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because'));

//Find the last instance of because s
console.log(sentence.lastIndexOf('because'));

//Use search to find the first ocurrence of because
console.log(sentence.search('because'));

//Use trim to get rid of white space
let phrase = '     I love to barbecue       ';

console.log(phrase.trim());

//Use startwith to make 30 days true
console.log(challenge.startsWith('30 Days of JavaScript'));

//Use ends with
console.log(challenge.endsWith('30 Days of JavaScript'));

//Use match to find all as
console.log(challenge.match('a'));

//Use concat
console.log(challenge.concat('30 Days of ', ' JavaScript'));

//Repeat challenge 2 times
console.log(challenge.repeat(2));


//Exercise 2 leve 2

//Print out statement using quotes
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')


//Print out statement using quotes
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

//Check if jargon is in sentence
let userString = 'I hope this course is not full of jargon.'

console.log(userString.includes('jargon'));

//Generate random number 0 and 100
let ranNumber = Math.floor(Math.random() * 101)

console.log(ranNumber);

let secondRanNumber = Math.floor(Math.random(50) * 101);

console.log(secondRanNumber);


let thirdRanNumber = Math.floor(Math.random() * 256);
console.log(thirdRanNumber);

//Create random letter for javascript string
let javaString = 'JavaScript';
