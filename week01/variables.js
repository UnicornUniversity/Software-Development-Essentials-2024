var x;
let y = 100;
let z = "hello";

console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);

y = 200;

// don't do this (bad practice)

z = 1000;

console.log("y new value = " + y);
console.log("z new value !!! = " + z);

const c = 150;
// can't reassign any constant
// c = 200;
