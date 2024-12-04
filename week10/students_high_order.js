class Student {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getFullName(){
        return this.name + " " + this.surname + " (age " + this.age + ")";
    }
}

const st1 = new Student("John", "Smith", 21);
const st2 = new Student("Greg", "Math", 25);
const st3 = new Student("Stew", "Campbell", 31);
const st4 = new Student("Mary", "Jones", 44);

const students = [st1, st2, st3, st4];

function getNumberYoungerThan(students, ageCriteria){
    const stFiltered = students.filter((st) => st.age <= ageCriteria);
    return stFiltered.length;
}

console.log(getNumberYoungerThan(students, 30));
console.log(getNumberYoungerThan(students, 40));
console.log(getNumberYoungerThan(students, 50));
