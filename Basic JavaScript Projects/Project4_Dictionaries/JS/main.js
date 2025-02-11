function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Lab",
        Age: 5,
        Sound:"Bark!"    
    };
    delete Animal.Sound; //Will remove the sound variable, resulting in an error
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //when the user clicks on the element, JS will attempt to pull the Sound option from Animal variable.
}