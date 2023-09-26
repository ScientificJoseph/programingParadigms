//get the id of form
const form = document.getElementById('user-input');

//handler for click event
function signupHandler(event) {
    //prevent default behavior for button click
    event.preventDefault();

    //input id for the username text-box
    const userNameInput = document.getElementById('username');
    //store the value user enters into text-box
    const enteredUsername = userNameInput.value;

    //input id for the password text-box
    const passwordInput = document.getElementById('password');
    //store the value user enters into text-box
    const enteredPassword = passwordInput.value;

    //check for valid input in usernam text-box
    if (enteredUsername.trim().length === 0) {
        alert('Invalid input - user name cannot be blank');
        return;
    }

    //check for valid input into password text-box
    if (enteredPassword.trim().length <= 5) {
        alert('Invalid input - [password must be 6 characters or longer]');
        return;
    }

    //object for storing user input
    const user = {
        userName: enteredUsername,
        password: enteredPassword
    };
    
    //print out user information
    console.log(user)
    console.log(`The FunkMaster ${user.userName} is in the building!`)

    //clears the text-box
    userNameInput.value = '';
    passwordInput.value = ''
    // console.log(user, '111')
    
}
//call to event handler signupHandler
form.addEventListener('submit', signupHandler)