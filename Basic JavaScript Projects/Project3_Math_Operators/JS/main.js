function additionFunction(){
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtractionFunction() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}

function multiplicationFunction() {
    var multiplication = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + multiplication;
}

function divisionFunction() {
    var division = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + division;
}

function moreMath() {
    var simpleMath = (1 + 2) * 10 / 2-5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half then subtracted by 5 equals " + simpleMath;
}

function modulusOperator() {
    var simpleRemainder = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6, you have a remainder of " + simpleRemainder;
}

function negationOperator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

function incrementOperator() {
    var x = 5;
    x++;
    document.write(x);
}

function decrementOperator() {
    var x = 5.25;
    x--;
    document.write(x);
}

function randomNumber() {
    let num = Math.random() * 100;
    let roundNum = Math.round(num);
    window.alert("Your rounded number is " + roundNum);
}