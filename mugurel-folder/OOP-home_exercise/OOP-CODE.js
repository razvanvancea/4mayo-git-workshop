// this ia a version full of our example, we will add methods of class and show the power of using them :)

class Player{

    constructor(name, hp, mp, items){
        this.name=name;
        this.hp=hp;
        this.mp=mp;
        this.items=items;
    }

    speak(phrase){
        console.log(`${this.name} says: ${phrase} `);
    }
}

const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);// apelam constructorul, hansolo e asignat la obiectul Player
hanSolo.speak("Never tell me the odds!");
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
const nader = new Player("Nader", 20, 50, ["Bazooka"])
nader.speak("I have a big item than you xD")
console.log(Object.getOwnPropertyNames(nader.__proto__));
// dupa cum vedeti metoda speak este prototip ca si constructorul pentru Han solo si Nader
//ca sa traducem mai bine, Players prototype has speak and Constructor, and HandSolo are name, hp, mp, items
// adica ce avem noi in constructori( alea name, hp, ....) sa fie instanta pentru orice player object, iar prototipurile sunt date care daca vrei
// le folosesti daca nu nu

// let s make it clear 


function AnotherPlayer(name,hp,mp,items){
    this.name=name;
    this.hp=hp;
    this.mp=mp;
    this.items=items;
   

}
AnotherPlayer.prototype.speak = function (phrase){
    console.log(`${this.name} says:${phrase}`);
}  
const darthVader= new AnotherPlayer("Darth Vader", 200, 5, ["Bazooka"])
darthVader.speak("Lalalala");
console.log(Object.getOwnPropertyNames(darthVader.__proto__));
// si o sa vedeti ca, ca si prototip avem doar constructorul/ deci asta e diferenta
// ce e instanta e peste tot
// pratic speak asta o sa trebuiasca sa il duplicam pentru fiecare player cand facem functii
// ca sa il faci prototip pe speak in functie- randu 39

//si asa o sa fie shared treaba asta si o sa o putem folosi pe cati playeri vrem
const Mugurel = new AnotherPlayer("Mugurel", 300, 50, ["Iti sterg erorile de pe masina xD"])
Mugurel.speak("Check DTC!")
console.log(Object.getOwnPropertyNames(Mugurel.__proto__))