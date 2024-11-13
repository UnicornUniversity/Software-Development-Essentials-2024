function findIndexes(inputArray, targetValue) {
    let start = performance.now();

    const cache = {};

    for (let index = 0; index < inputArray.length; index++) {
        const currentValue = inputArray[index];
        const diff = targetValue - currentValue;
        if (cache[diff] === undefined){
            cache[currentValue] = index;
        } else {
            console.log("indexes: " + index + ", " + cache[diff]);
            console.log("values: " + inputArray[index] + ", " + diff);
            const timeTaken = performance.now() - start;
            console.log("time = " + timeTaken + " milliseconds");
            return {"index1": index, "index2": cache[diff]};
        }
    }
}

const targetValue = 64189;

console.log(findIndexes(input_vector, targetValue));

