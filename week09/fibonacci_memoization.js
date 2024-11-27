let numberOfIteration = 0;
// key-value
const cache = {};

function fibonacci(n) {
    numberOfIteration ++;

    if (cache[n] !== undefined){
        return cache[n];
    }

    let value;
    switch (n) {
        case 0:
            value = 0;
            break;
        case 1:
            value =  1;
            break;
        default:
            value = fibonacci(n - 2) + fibonacci(n - 1);
            break;
    }

    cache[n] = value;
    return value;
}

/*
for (let i = 1; i <= 20; i++) {
    numberOfIteration = 0;
    console.log(i.toString() + " => " + fibonacci(i) + " => " + numberOfIteration);
}
*/

// F50 results is 12,586,269,025
//                  12,586,269,025

console.log(fibonacci(50) + " => " + numberOfIteration);

console.log(fibonacci(1000) + " => " + numberOfIteration);
