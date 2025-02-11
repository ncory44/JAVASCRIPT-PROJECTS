function myDictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Lab",
        Age: 5,
        Sound:"Bark!"    
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}