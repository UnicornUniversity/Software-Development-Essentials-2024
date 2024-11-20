const arr = [6, 4, 7, 1, 56];

// MAP
console.log(arr.map((item) => {
    console.log("hello");
    let i = 100;
    return item + 1
}));

console.log(arr.map((item) => item + 1));

// immutability !!!
console.log(arr);

// FOREACH
arr.forEach((a) => console.log("item = " + a));

// REDUCE
console.log("min value =" + arr.reduce((currentMinimalValue, currentValue) => currentMinimalValue > currentValue ? currentValue : currentMinimalValue));

// FILTER

// just for demo purposes

function isEven(n){
    return n % 2 === 0;
}

console.log("even numbers only = " + arr.filter((item) => isEven(item)));
console.log(arr);


