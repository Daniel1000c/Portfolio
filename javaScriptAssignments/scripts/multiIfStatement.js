//Prompt visitor with a prompt
let visitorName = prompt('What is your position?');

//Create if statement for each position
if (visitorName == 'Admin'){
    //Prompt user for a password
    let password = prompt('What is your password?');

    //Create ternary if statement for practice
    (password == 'TheMaster') ? alert('Welcome') : (password != 'TheMaster') ? alert('Wrong password') : alert('Canceled');
}  else if (visitorName == '' || visitorName == null){
    alert('Canceled');
} else {
    //Create a alert saying I don't know you
    alert('I don\'t know you.');
}