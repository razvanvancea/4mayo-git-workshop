// deci aici o sa vedem ca.. clasa este ca o functie
// doar ca la clase ne folosim de un constructor pentru a "parsa" informatiile
// in exemplul urmator vom vedea ca asemanarea este foarte mare insa pe viitor vom avea un exemplu care ne va arata adevara "shine metod" a claselor
// keep in touch :D

class Player{}

const hanSolo= new Player();// instance of class, iar hanSolo e asignat la Obiectul Player
console.log(hanSolo);
// pasul 1, da de aici RUN
// iti va afisa un "tag" care reprezinta obiectul
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
// ei si cu asta ce ne zice? ca prototipul nostru are un constructooooor :D, bine inca nu e folosit el cumva e acolo ca default


//hai sa vedem cu functia
function AnotherPlayer(){
}

const darthVader = new AnotherPlayer();
console.log(darthVader)
// deci ce se intampla, cream un constructor cu aceasta functie, si instanta va fi dartVader adica obiectul
//putem spune asa intre ghilimele ca functia este o clasa, ca si zicala nu ca realitate
//nu ma crezi? ia hai sa dam un...
console.log(Object.getOwnPropertyNames(darthVader.__proto__));
// da i run si o sa vezi... connstructooooor