//correct way to do OOP in JS, after manual class-example :D
class Player{
    constructor(name, hp, mp, items){
        this.name=name;
        this.hp=hp;
        this.mp=mp;
        this.items=items;
    }

}

const hanSolo=new Player("Han Solo", 100, 10, ["blaster"]);// call constructor
console.log(hanSolo)
// poti face cati playeri vrei tu folosind clase si constructori
//citeste randu 32
const nader = new Player("Nader", 10, 5,["Computer"])
console.log(hanSolo)
console.log(Object.getOwnPropertyNames(nader.__proto__));
//si avem 2 playeri obiect :D, la functie nu putem, ca sa fac al treilea player ar fi trebuit sa creez o alta functie
//ThirdPlayer lalala, practic munca in plus, mai mult cod, erori, etc.=> de aici incepe magia claselor xD


// hai sa vedem cum facem tamplet ul cu fctia

function AnotherPlayer(name,hp,mp,items){
    this.name=name;
    this.hp=hp;
    this.mp=mp;
    this.items=items;

}
const darthVader= new AnotherPlayer("Darth Vader", 200, 5, ["Bazooka"])
console.log(darthVader)
// ai putea spune ca nu e nici o diferenta, nu?
// ca functia si clasa fac acelasi lucru, construiesc cu ajutorul obiectelor si apelarea de constructor playeri
//ei bine la acest nivel da, dar vom vedea mai incolo de ce sunt asa de speciale clasele xD

//ei uite hai sa mai facem un player si o sa il apelam sun hanSolo sa fie la vedere :) randu 16

