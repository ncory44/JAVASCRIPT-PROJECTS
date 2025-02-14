//Utilizes the concat function, which takes separate strings and concatonates them together
function fullSentence() {
    var part_1 = "Is this a dagger which I see before me? ";
    var part_2 = "The handle towards my hand? Come, let me clutch thee. "
    var part_3 = "I have thee not and yet I see the still. "
    var part_4 = "Art thou not, fatal vision, sensible? To feeling as to sight?"
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

//The slice method, which slices out a particular part of a string
function sliceMethod() {
    var Sentence = "Or art thou but a dagger of the mind?";
    var Section = Sentence.slice(18,25);
    document.getElementById("Slice").innerHTML = Section;
}

//toUpperCase method, which capitilizes a specified string or part of string
function upperMethod() {
    var Sentence = "A false creation, proceeding from the heat-oppressed brain?"
    var upperText = Sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upperText;
}

//Utilizes the search function and logs its position.
let sentence = "This is an example";
let position = sentence.search("Example");
console.log(position);

//Utilizes toString method, which converts a value into a string
function stringMethod() {
    var X = 73;
    document.getElementById("numbersToString").innerHTML = X.toString();
}

//Gives a more precise, specified place value number
function precisionMethod() {
    var X = 1277.54921092;
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}

//Uses the tofixed method, which converts a number to a string and rounds it to a specified number of decimals
function fixedMethod() {
    var X = 8.33534
    document.getElementById("fixedNum").innerHTML = X.toFixed(2);
}

//Utilizes the valueOf method, which returns a specified value of an item. In this case I'm using Date(), which measures how many milliseconds have passed since January 1.
function valueMethod() {
    var X = new Date();
    document.getElementById("dateInMilliseconds").innerHTML = X.valueOf();
}