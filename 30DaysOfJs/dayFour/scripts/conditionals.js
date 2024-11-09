//Prompt the user for age
let userInput = prompt('Enter your age:');

//Create if statement
if (userInput >= 18) {
    alert('You are old enough to drive.')
} else {
    alert(`You are left with ${18 - userInput} years to drive.`)
}

//Prompt and compare user age
let userAge = prompt('What is your age?')

if (userAge > 22) {
    alert(`You are ${userAge - 22} years older than me`);
} else if (userAge == 22) {
    alert('You are the same age as me.');
} else if (userAge < 22) {
    alert(`You are ${22 - userAge} years younger than me.`);
} else {
    alert('You must input a age');
}
