//Declare variable challenge and assign 30 days of javascript
let challenge = '30 Days Of JavaScript';

//Print string out
console.log(challenge);

//Print out length of string
console.log(challenge.length);

//Change the string to all uppercase
console.log(challenge.toUpperCase());

//Change the string to lowercase
console.log(challenge.toLowerCase());

//Cut out the first ford of the string using substring
console.log(challenge.substring(3,21));

//Slice out days of javascript from string
console.log(challenge.substring(0,3));

//Check if string contains script
console.log(challenge.includes('Script'));

//Split the string into an array
console.log(challenge.split());

//Split the array using a space
console.log(challenge.split(' '));

//Create company string
let companyName = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';

//Split string into array with comma
console.log(companyName.split(','));

//Change string phrase from javascript to python
console.log(challenge.replace('JavaScript', 'Python'));

//Check index 15
console.log(challenge.charAt(15));

//Find the character code for j
console.log(challenge.charCodeAt('J'));

//Use index to find the first occurence of a 
console.log(challenge.indexOf('a'));

//Use index to find the lsat occurence of a 
console.log(challenge.lastIndexOf('a'));

//Use search to find the position of the first occurence of because
let phrase = 'You cannot end a sentence with because because because is a conjunction';

console.log(phrase.search('because'));

//Use trim to get rid of string space
let whiteSpace = '      Hamburger       ';

console.log(whiteSpace.trim());

//Use start with parameter
console.log(challenge.startsWith('30 Days Of JavaScript'));

//Use endswith
console.log(challenge.endsWith('30 Days Of JavaScript'));

//Use match method to find all a
console.log(challenge.match('a'));

//Use concat to merge 30 days and 
console.log(challenge.concat('30 Days of ', ' JavaScript'));

//Use repeat to copy the string two times
console.log(challenge.repeat(2));


//Level 2
//Print out statement with single quotes
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

//Print out statement with multiple quotes
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

//Check if type of '10' is exactly equal to 10
if (typeof('10') == 10) {
    console.log('True');
} else {
    console.log('False Turning into number');
    console.log(parseInt('10'));
}

//Check if parseFloat 9.8 is equal 10 
if (typeof(parseFloat('9.8')== 10)) {
    console.log('True');
} else {
    console.log('Statement not true, turning into number')
    console.log(parseInt('9.8'));
}

//Check if on is in python and jargon
let phrase1 = 'Python';

let phrase2 = 'Jargon';

console.log(phrase1.includes('on'));

console.log(phrase2.includes('on'));

//Check if jargon is in the string
let jargonPhrase = 'I hope this course is not full of jargon.';

console.log(jargonPhrase.includes('jargon'));

//generate random with 0 and 100
let randNum = Math.floor(Math.random() * 101);

console.log(randNum);


//Generate random number from 50 to 100
function randomNumber() {
    return Math.floor(Math.random() *(100-50+1)) + 50
}

let randNumGen = randomNumber();
console.log(randNumGen);


//Generate numbers from 0 to 255
let randNum2 = Math.floor(Math.random() * 255);

console.log(randNum2);

//Use substring to slice out because 
console.log(phrase.substring(31,54));
