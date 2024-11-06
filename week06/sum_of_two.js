const targetValue = 18;
const inputArray = [7, 11, 15, 22];

function findIndexes(inputArray, targetValue) {
    let start = performance.now();
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            if (i === j) continue;
            const v1 = inputArray[i];
            const v2 = inputArray[j];
            if (v1 + v2 === targetValue) {
                console.log("index1 = " + i + "; index2 = " + j);
                console.log("value1 = " + v1 + "; value1 = " + v2);
                const timeTaken = performance.now() - start;
                console.log("time = " + timeTaken + " milliseconds");
                return {"index1": i, "index2": j};
            }
        }
    }
}

console.log(findIndexes(inputArray, targetValue));

