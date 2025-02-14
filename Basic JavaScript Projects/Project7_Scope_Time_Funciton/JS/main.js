var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function colorFunction() {
    color = document.getElementById("color").value;
    if (color === "blue"){
        Correct = "Correct answer";
    }
    else if (color === "turquoise" || color === "teal") {
        Correct = "Close enough";
    }
    else if (color === "brown") {
        Correct = "Ew, really?";
    }
    else {
        Correct = "Try again (hint: it's blue)";
    }
    document.getElementById("favoriteColor").innerHTML = Correct;

}