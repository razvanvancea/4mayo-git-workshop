class Student{
    constructor(name, major, grades){
        this.name = name;
        this.major = major;
        this.grades = grades;
    }

    addGrade(grade){
        this.grades.push(grade);
    }

    gpa(){
        let average = 0;
        for(const grade of this.grades)
        {
           average += grade;
        }
        return average / this.grades.lenght;
    }
}

const eva = new Student("Eva", "Arts", [95, 75, 83]);
console.log(eva)

console.log(eva.gpa());
eva.addGrade(89)


/**
 * 1.Create a class called "Student"
 * 
 * 2.Allow us to pass in 3 properties/fields to the Student constructor which get set to the instance:
 * -name (String)
 * -major(String)
 * -grades(Array of Numbers)
 * 
 * 3.Create a method on "Student" called "addGrade" that
 *   has one parameter "grade". It will simply push the
 *   "grade" given on to the "grades" Array.
 * 
 * 4.Create a method on "student" called "gpa" that will
 *   return AVERAGE grade of the student's "grades"
 * 
 * 5.Create an instance of the Student class like so:
 * ....
 * 4.Print out the "eva" instance 
 * 
 * 6.Use the "gpa" method on "eva" to print out their average grade (should be 84.33)
 */