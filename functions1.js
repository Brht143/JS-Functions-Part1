let today = new Date();
let currentYear = today.getFullYear();

language_array = ["en" , "es", "fr", "tr"]

// Defining the functions

function printName() {
    console.log("Ibrahim");
}

function printAge(yearOfBirth) {
    
    let age = currentYear - yearOfBirth;
    console.log(age);
}

function printAgeAndName(yearOfBirth, name) {
    let today = new Date();
    let age = currentYear - yearOfBirth;
    console.log(`Hello ${name}, you are ${age} years old`)
}

function printHello(name, language) {
    lang_id = language_array.indexOf(language);
    if (lang_id == -1) greeting = "مرحبا";
    else if (lang_id == 0) greeting = "Hello";
    else if (lang_id == 1) greeting = "Hola";
    else if (lang_id == 2) greeting = "Bonjour";
    else if (lang_id == 3) greeting = "Merhaba";
    console.log(`${greeting} ${name}`)
}

function printMax(firstNum, secondNum) {
    biggerNum = (firstNum > secondNum) ? firstNum : secondNum;
    console.log(biggerNum);
}
// Calling the function

printName();
printAge(1990);
printAgeAndName(1990, "Ibrahim");
printHello("Ibrahim", "es");
printMax(-13,3);