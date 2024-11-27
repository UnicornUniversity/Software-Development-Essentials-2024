let numberOfIteration = 0;

function fibonacci(n) {
    numberOfIteration ++;
    switch (n) {
        case 0:
            return 0;
        case 1:
            return 1;
        default:
            return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

/*
for (let i = 1; i <= 20; i++) {
    numberOfIteration = 0;
    console.log(i.toString() + " => " + fibonacci(i) + " => " + numberOfIteration);
}

*/

console.log(fibonacci(50) + " => " + numberOfIteration);
