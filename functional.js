
const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
    if (flag === REQUIRED){ //returns true if entered value is not empty
        return value.trim().length > 0;//flag for username being entered
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length > validatorValue; //flag for password being the correct length
    }
}

function getUserInput(inputElementId) {
    return document.getElementById(inputElementId).value;
}

function createUser(userName, userPassword) {
    if(!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
        throw new Error('Invalid Input - username or password is wrong (password must be at least 6 characters).')
    }
    return {
        userName: userName,
        password: userPassword
    }
}

function greetUser(user) {
    
    console.log('Well Hello ' + user.userName + '. Welcome To The Initiation...')
    const box1 = document.getElementById('username')
    const box2 = document.getElementById('password')
    box1.value = '';
    box2.value = '';
}

function signupHandler(event) {
    event.preventDefault(); 
    //store the value user enters into text-box
    const enteredUsername = getUserInput('username');
    //store the value user enters into text-box
    const enteredPassword = getUserInput('password');
    try {
        const newUser = createUser(enteredUsername, enteredPassword);
        console.log(newUser)
        greetUser(newUser);
    } catch(err){
        const box1 = document.getElementById('username')
        const box2 = document.getElementById('password')
        box1.value = '';
        box2.value = '';
        alert(err.message);
    }
}

function connectForm(formId, formSubmitHandler)  {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler)
}
connectForm('user-input', signupHandler);