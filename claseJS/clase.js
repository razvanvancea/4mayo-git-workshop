//clasa Person - age, nume, inaltime, greutate //coceptual, design
//obiect 1 -21, razvan , 180, 76
//obiect 2 - 30, bianca, 180,75
//obiect 3 - 3, alina, 175, 3


class Person{
    age;
    name;
    height;
    weight;

    constructor(age, name, height, weight){
        this.age = age;
        this.name = name;
        this.height = height;
        this.weight = weight;

    }

    introduceYourSelf(){
        console.log('Hello,, my name is'+ this.name +' and I am ' +this.age+' years old)
    }
}
const person1 = new Person(21, 'razvan', 180, 76);
const person2 = new Person(30,'bianca',180,75);


console.log (person1.name)