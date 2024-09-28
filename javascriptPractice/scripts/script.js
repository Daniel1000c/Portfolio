//Declare user name
let userName = 'Adam';

//Declare user age
const userAge = 25;

//declare user color
let color = 'red';

// Declare a boolean if user is a student
let isStudent = true;

//Create array to store user hobbies
let hobbies = ['Working Out', 'Gaming', ' Reading'];

// Create object storing user address, street, city, and zip code
let userAddress = {street: '12172 SW 52nd CT', city: 'Cooper City', zipCode: 33330};



//Display user information to user
console.log(`${userName} is ${userAge} and likes the color ${color} <br> ${userName} student status is ${isStudent} and likes ${hobbies} <br> ${userAddress.street}, ${userAddress.city}, ${userAddress.zipCode}`);

document.getElementById('userInformation').innerHTML = `${userName} is ${userAge} and likes the color ${color} <br> ${userName} student status is ${isStudent} and likes ${hobbies} <br> ${userAddress.street}, ${userAddress.city}, ${userAddress.zipCode}`