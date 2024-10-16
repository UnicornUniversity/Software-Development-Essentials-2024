function sayHello(personName) {
    return "Hello, " + personName + "!";
}

console.log(sayHello("John"));
console.log(sayHello("Mary"));
console.log(sayHello("Greg"));

function sum(a, b) {
    return a + b;
}

console.log("2 + 2 = " + sum(2, 2));

// YOB = year of born
function getPersonInfo(name, yob){
    const age = 2024 - yob;
    let personInfo = sayHello(name);
    personInfo += "Name: " + name + " age: " + age.toString();
    return personInfo;
}

console.log("person info >> " + getPersonInfo("Julie", 1980));

function canSellAlcohol(yob){
    const age = 2024 - yob;
    //return age >= 18 ? true : false;
    return age >= 18;

    /*
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
    */
}

const yob2013 = 2013;
const yob2001 = 2001;
console.log("canSellAlcohol >> " + canSellAlcohol(yob2013));
console.log("canSellAlcohol >> " + canSellAlcohol(yob2001));

function missingArguments(a, b, c){
    console.log("a = " + a);
    console.log("b = " + b);
    console.log("c = " + c);
}

missingArguments(10, 20, 30);

missingArguments(10, 20);

missingArguments(10, 20, 30, 50, 304, "blabla");
