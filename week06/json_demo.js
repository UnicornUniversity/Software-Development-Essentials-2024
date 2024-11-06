const student1 = {
    "name" : "John",
    "surname" : "Smith",
    "age" : 27,
    "address" : {
        "city" : "Prague",
        "street" : "Kolbenova"
    }
};

console.log(student1.name);
console.log(student1.age);
console.log(student1.address);
console.log(student1.address.street);

console.log(student1["name"]);
console.log(student1["age"]);
console.log(student1["address"]);
console.log(student1["address"]["street"]);

const student2 = {
    "name" : "Mary"
}
console.log("----------");

const students = [student1];
students.push(student2);

for (const student of students) {
    console.log(student.name);
    console.log(student.surname);
    console.log("full name = " + student.name + " " + student.surname);
}


