class Animal{
    constructor(type, name){
       this.type = type;
       this.name = name;
    }
}

const Animal1 = new Animal("Jaguar", "Salbatic");
const Animal2= new Animal("Leu", "cat2");
console.log(Animal1);
console.log(Animal2)

Animal1.name = "Oscar";
console.log(Animal1)

/*
1.Create a class called "Animal"

2.Allow us to pass in 2 properties/fields to the 
    Animal constructor which get set to the instance:
    -type (String)
    -name (String)

3.Create two instaces of the Animal class of your
  choice passing in different "type" and "name" for each

4.Print out both animal instances

5.Change the "name" of one of your animals and print it out again.

*/