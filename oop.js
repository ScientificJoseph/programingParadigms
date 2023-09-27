class Validator { //static class making vars and methods accessible without instantiating
    static REQUIRED = 'REQUIRED'; // flag for username not being empty
    static MIN_LENGTH = 'MIN_LENGTH'; // flag for password min length 

    static validate(value, flag, validatorValue){
        if (flag === this.REQUIRED){ //returns true if entered value is not empty
            return value.trim().length > 0;//flag for username being entered
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue; //flag for password being the correct length
        }
    }
}

class User { //receives valid uname and password when newUser calls and inatantiates
    constructor(uName, uPassword) {
        this.userName = uName;
        this.password = uPassword;
    }
    greet(){ //called from newUser 
        console.log('Hi, I am ' + this.userName + ' The King of The Funk')
    }
}

class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input'); // acces to user form
        this.userNameInput = document.getElementById('username'); // acces to entered username
        this.passwordInput = document.getElementById('password'); // access to entered password

        this.form.addEventListener('submit', this.signupHandler.bind(this)); //click event that calls
    }
    signupHandler(event){
        event.preventDefault(); // prevents submit click from sending a req to server / refreshing page
        const enteredUserName = this.userNameInput.value; //stores username
        const enteredPassword = this.passwordInput.value; //stores password

        if(!Validator.validate(enteredUserName, Validator.REQUIRED) || 
           !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5) //enters into alert if either contitions are not true
        ) {
            alert('Invalid Input - username or password is wrong (password must be at least 6 characters).'); //invalid input alert
            this.userNameInput.value = ''
            this.passwordInput.value = ''
            return;
        };
        const newUser = new User(enteredUserName, enteredPassword) //instance of user. passes username and password on instatiation
        console.log(newUser);
        newUser.greet() //calls greet method in newUser instance of User class
        this.userNameInput.value = ''
        this.passwordInput.value = ''
    }
}

new UserInputForm(); //creates new UserInputForm instance without explicitly saving it and calls method on it. The new instance is then "lost" after executing of method. The object will be instantiated and any code in its constructor will be executed. After that the object will be garbage collected since there isn't any reference pointing to it.

