//declaration
class Student {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.age = undefined;
    }

    getFullName(){
        return this.name + " " + this.surname + " (age " + this.age + ")";
    }
}

// we make instances of classes to use
const student1 = new Student("Mary", "Joe");
student1.age = 27;
const student2 = new Student("John", "Smith");
student2.age = 20;

console.log(student1.getFullName());
console.log(student2.getFullName());