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