function animalFunction() {
    var animalOutput;
    var animals = document.getElementById("animalInput").value;
    var animalString = " is a great animal!";
    switch (animals) {
        case "Cat":
            animalOutput = "A cat" + animalString;
        break;
        case "Dog":
            animalOutput = "A dog" + animalString;
        break;
        case "Mouse":
            animalOutput = "A mouse" + animalString;
        break;
        case "Bunny":
            animalOutput = "A bunny" + animalString;
        break;
        case "Snake":
            animalOutput = "Eh...";
        break;
        default:
            animalOutput = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = animalOutput;
}

//window object methods
window.alert("Hello!");
window.prompt("Enter your name")


//window object properties
console.log("Window name: " + window.name);
console.log("Window width: " + window.innerWidth);

function helloWorldFunction(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//draws a circle in the canvas
function testCircle(){
    let canvas = document.getElementById("testCanvas");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

//draws a gradient in the canvas
function testGradient(){
    let canvas = document.getElementById("testCanvas");
    let ctx = canvas.getContext("2d");
    let grd = ctx.createLinearGradient(canvas.width / 2, 0, canvas.width, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(canvas.width / 2 + 20, 20, 150, 100); //moves the gradient to the right of the circle
}


//calls both shapes to the canvas without overriding each other
window.onload = function() {
    testCircle();
    testGradient();
}