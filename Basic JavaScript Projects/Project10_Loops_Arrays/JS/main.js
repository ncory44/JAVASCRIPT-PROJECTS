//Creating a loop that counts down from 10 when the user clicks the button.
function callLoop() {
    let text = "";
    for (let x=1; x <= 10; x++) {
        text += x + " ";
    }
    document.getElementById("Loop").innerHTML = text;
}

//String length property
let str = "I wonder what the length of this string is."
console.log(str.length);

var vegetables = ["Carrot", "Cucumber", "Corn", "Tomato(Legally, not biologically)", "Beet"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < vegetables.length; Y++) {
        Content += vegetables[Y] + "<br>";
    }
    document.getElementById("List_of_Vegetables").innerHTML = Content;
}

//Array
function catPics() {
    var catPicture = [];
    catPicture[0] = "sleeping";
    catPicture[1] = "playing";
    catPicture[2] = "eating";
    catPicture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + catPicture[2] + ".";
}

//Uses a constant variable "motorcycle"
function constantFunction() {
    const motorcycle = {make:"BMW",model:"R-NineT",year:"2018",color:"blue"};
    motorcycle.color = "red"; //modifying the existing variable 'color'.
    motorcycle.owner = "Nathan"; //adding a new variable
    document.getElementById("Constant").innerHTML = "The motorcycle is a " + motorcycle.make + " " + motorcycle.model + ", it's year is " + motorcycle.year + ", and it is the color " + motorcycle.color + ". The owner is named " + motorcycle.owner + ".";
}

//Because the defer that I put next to my src script element apparently eliminates any document.write operations, I have created a letFunction to test it out.
function letFunction() {
    let x = "banana";
    document.getElementById("Let").innerHTML = x;
    {
        let x = "apple";
        document.getElementById("Let").innerHTML += "<br>" + x; //+= is the addition assignment operator, and adds a value to an existing variable and updates the variable in place.
    }

    document.getElementById("Let").innerHTML += "<br>" + x;
}

//return function. User enters there name and the computer sends them a greeting
function returnFunction() {
    let userName = document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML = "Hello " + userName + "!";
}

//object function
let moto = {
    make: "Aprilia",
    model: "RS660",
    year: "2022 ",
    color: "red ",
    description : function() {
        return "The motorcycle is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("motoObject").innerHTML = moto.description();

//break statement used to find the even number
function findFirstEven() {
    let numbers = [1, 3, 5, 7, 8, 9, 11, 13];
    let output = "";

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { //Finds the first even number
            output = "First even number: " + numbers[i];
            break; //exits the loop
        }
    }

    document.getElementById("evenNumber").innerHTML = output;
}

//continue statement in a loop
function onlyOddsFunction() {
    let numbers = [1,2,3,4,5,6,7,8,9];
    let output = ""; //ensures that the output is built dynamically and doesn't overwrite previous values
    for (let i=0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { //detects if the number is even
            continue; //skips it
        }
        output += numbers[i] + " "; //+= adds a value to an existing variable (also mean output = output + (numbers[i] + " ")). [i] retrieves the value at index i. the " " adds a space between the numbers in output.
    }

    document.getElementById("continue").innerHTML = "Odd numbers: " + output;
}