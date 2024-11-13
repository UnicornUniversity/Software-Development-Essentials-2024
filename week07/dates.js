const dtNow = Date.now();
console.log("dtNow =" + dtNow);

// be careful! month's number: 0..11
const dt = new Date(2024, 10, 13);
console.log("specific date is " + dt.toString());
console.log("year is " + dt.getFullYear());
console.log("month is " + dt.getMonth());
console.log("day is " + dt.getDate());

// when you create a date with string, put number of month instead the index of month
const dtStr1 = new Date("2024-11-13");
console.log("dtStr1 is " + dtStr1.toString());
const dtStr2 = new Date("2024-12-15");
console.log("dtStr2 is " + dtStr2.toString());

console.log("dtStr1 in ISO is " + dtStr1.toISOString());
console.log("dtStr1 in UTC is " + dtStr1.toUTCString());

const person = {"name" : "John", "dob" : dtStr1.toISOString()}

console.log("person dob is " + person.dob);

