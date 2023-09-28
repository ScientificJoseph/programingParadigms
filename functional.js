const REQUIRED = 'REQUIRED'; //flag for username validation
const MIN_LENGTH = 'MIN_LENGTH';//flag for password validation

function validate(value, flag, validatorValue) {//receives userinputs conditional call in createUser
    if (flag === REQUIRED){ //flag for username being entered
        return value.trim().length > 0;//returns true if entered value is not empty
    }
    if (flag === MIN_LENGTH) {//flag for password being the correct length
        return value.trim().length > validatorValue;  //returns true if password is the correct length
    }
}

function getUserInput(inputElementId) {//receives username and password id's 
    return document.getElementById(inputElementId).value;//returns entered values to signupHandler
}

function createUser(userName, userPassword) {//receives username and password from call in signupHandler
    if(!validate(userName, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) { //passes user inputs to validate to be validated
        //throws error if either returns from validate are !true
        throw new Error('Invalid Input - username or password is wrong (password must be at least 6 characters).')
    }
    return { // builds object and returns it to signupHandler
        userName: userName,
        password: userPassword
    }
}

function greetUser(user) { //receives obgect from call in signUp hadler
    console.log('Well Hello ' + user.userName + '. Welcome To The Initiation.')//prints greet with object property userName received from signupHandler
    const box1 = document.getElementById('username')
    const box2 = document.getElementById('password')
    box1.value = '';
    box2.value = '';
}

function signupHandler(event) { //click handler. passes input ids to validator to be validated
    event.preventDefault(); //prevents form for attempting yo submit request to server and reloading web page
    //passes username id to getUserInput function to get acces to the username input value
    const enteredUsername = getUserInput('username');
    //passes the password id getUserInput function to get acces to the password input value
    const enteredPassword = getUserInput('password');
    try {// passes values entered by user to createUser which will return an object with the validated username and password or throw an error
        const newUser = createUser(enteredUsername, enteredPassword);
        console.log(newUser) //prints the object received from call to createUser
        greetUser(newUser);//calls greetUser and passes validated object to print greet message
    } catch(err){
        const box1 = document.getElementById('username')
        const box2 = document.getElementById('password')
        box1.value = '';
        box2.value = '';
        alert(err.message);
    }
}

function connectForm(formId, formSubmitHandler)  { //receives formId 
    const form = document.getElementById(formId); //gets access to the form
    form.addEventListener('submit', formSubmitHandler) //adds event listener to form and calls signupHandler on click event
}
// statrs app calling connectForm, passing form Id and event handler function
connectForm('user-input', signupHandler);