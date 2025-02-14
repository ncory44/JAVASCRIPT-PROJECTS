function rideFunction() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}

function ageFunction() {
    var Age, canVote;
    Age = document.getElementById("Age").value;
    canVote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = canVote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Behicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function vehicleFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Person(firstName, lastName, age) {
    this.Person_firstName = firstName;
    this.Person_lastName = lastName;
    this.Person_age = age;
}

var Billy = new Person("Billy", "Bob", "38");

function randomFunction(){
    document.getElementById("New_and_This").innerHTML = "Billy's first name is: " + Billy.Person_firstName + "<br>Billy's last name is: " + Billy.Person_lastName + "<br>Billy's age is: " + Billy.Person_age;
}

var abstract = Boolean;
document.write(abstract);

function countFunction() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}