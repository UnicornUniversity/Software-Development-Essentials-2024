const student1 = {
    "name" : "John",
    "surname" : "Smith",
    "age" : 27,
    "address" : {
        "city" : "Prague",
        "street" : "Kolbenova"
    }
};

const student2 = {
    "name" : "Mary",
    "surname" : "Smith",
    "age" : 30,
    "address" : {
        "city" : "Brno",
        "street" : "Kolbenova"
    }
};

const student3 = {
    "name" : "Greg",
    "surname" : "Smith",
    "age" : 25,
    "address" : {
        "city" : "Brno",
        "street" : "Kolbenova"
    }
};

const students = [student1, student2, student3];

const studentsFiltered = students.filter((st) => st.age < 30 && st.address.city === "Brno");
console.log(studentsFiltered);
console.log(studentsFiltered.length);

const studentWithMinAge = students.reduce((studentWithMinAge, studentAge) => studentWithMinAge.age > studentAge.age ? studentAge : studentWithMinAge);
console.log("student's name with min age = " + studentWithMinAge.name);

console.log("======== sorting ========");

// ASC
console.log(students.sort((student1, student2) => student1.age - student2.age));

// DESC
console.log(students.sort((student1, student2) => student2.age - student1.age));

//console.log(students);
