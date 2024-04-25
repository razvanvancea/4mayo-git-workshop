// Cum ne ajuta functiile?
//exemplu fara functie, nu ne ajuta daca vrem sa folosim o constanta de doua ori, in cazul de fata pentur un mic joculet
const player ={
    name:"Mugurel",
    hp:100,
    mp:0,
    items:[]
}

const hanSolo = player;
hanSolo.name= "Han Solo";
hanSolo.hp =80
hanSolo.mp = 20
hanSolo.items=["Blaster"];
// pe scurt aici cand vom apela console log, al doilea player va avea aceleasi valori ca player 1 si nu ne dorim asta nu?
// see the better version :) -> we will use a function for that
const darthVader = player;

console.log(hanSolo);
console.log(darthVader);