//Create switch statement that goes through each different grade


//Prompt user for grade percent
let userPrompt = prompt80('What is your grade?')

//Create an if statement to show user letter grade
if (userPrompt >= 80 || userPrompt <=100) {
    alert('A');
} else if (userPrompt >= 70 || userPrompt <= 89) {
    alert('B');
} else if(userPrompt >= 60 || userPrompt <= 69) {
    alert('C');
} else if (userPrompt >= 50 || userPrompt <= 59) {
    alert('D')
} else if (userPrompt >= 0 || userPrompt <= 49) {
    alert('F');
} else {
    alert('Please input a valid grade percent!!!!')
}