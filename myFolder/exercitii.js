
//Suma 2 nr var 1;
const x= 3;
const y=2;
let suma x+y;
console.log("Suma este:" +suma);

//Suma a doua nr var 2
const suma1 = (z,w) => {return z+w}
console.log(suma(3,4))

// Age inDays
const calculateAgeInDays = age =>{return age*365}
console.log("Varsta este ${calculateAgeInDays(28)} de zile");

//Verificare tip
function checkType(variabila){
    if (typeOf(variabila)=="string")
        return "Acesta este un string"
    else
    if(typeof(variabila) == "boolean")
        return "Variabila booleana"
    else 
    return "Acesta este numar"
}
console.log(checkType(true));

//de returnat ultimul element 

const listaMasini = ['Skoda', 'mazda', 'dacia']
const lastCar = (listaMasini) => {

    return listaMasini[listaMasini.lenght - 1]

   //returneaza primul element
    return listaMasini[0]
}

console.log(lastCar(listMasini))

//transformare ore in secunde

const hoursToSeconds = (numberOfHour) => {
    return numberOfHour * 360
}
console.log (hourToSeconds(2))


// afisare numerel pana la o anumita valoare

const printNumbers = function(number){
    for(let i=0;i<=number;i++){
        console.log(i)
    }
 
}
printNumbers(10)














