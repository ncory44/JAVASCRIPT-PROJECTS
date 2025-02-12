document.write(typeof "This is a string" + "<br>");
document.write("14" + 6 + "<br>");
document.write(2e310 + "<br>");
document.write(-3e310 + "<br>");
document.write((10>2) + "<br>");
document.write((10<2) + "<br>");
console.log(2+2);
console.log(5==7);
console.log(10==10);
X=10;
Y=10;
document.write((X===Y) + "<br>");
A=15;
B='15';
document.write((A===B) + "<br>");
document.write((X===A) + "<br>");
document.write((5 > 2 && 10 > 4) + "<br>");
document.write((5>10 || 10 > 4) + "<br>");


function myFunction() {
    document.getElementById("Test").innerHTML = 0/0;
}

function notFunctionFalse() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function notFunctionTrue() {
    document.getElementById("Not").innerHTML = !(10 > 20);
}

window.onload = function() {
document.getElementById("Test1").innerHTML = isNaN('This is a string');
document.getElementById("Test2").innerHTML = isNaN('007');
}
