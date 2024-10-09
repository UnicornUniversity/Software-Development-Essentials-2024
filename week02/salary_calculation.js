const weeksPerYear = 52;
const hourRate = 1000; //CZK
const hoursPerDay = 8;
const daysPerWeek = 5;
const taxRate = 0.15; // 15%

const hoursPerWeek = daysPerWeek * hoursPerDay;
const hoursPerYear = weeksPerYear * hoursPerWeek;
const grossAmountPerYear = hoursPerYear * hourRate;

console.log("gross amount (year) = " + grossAmountPerYear + " CZK");

const taxToBePaid = taxRate * grossAmountPerYear;
console.log("tax to be paid = " + taxToBePaid + " CZK");

const netAmountPerYear = grossAmountPerYear - taxToBePaid;
console.log("net amount (year) = " + netAmountPerYear + " CZK");

console.log("net amount (month) = " + netAmountPerYear / 12 + " CZK");














