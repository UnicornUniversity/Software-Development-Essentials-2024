const arrOdd = [3, 3, 7, 1, 8, 6, 9];
const arrEven = [3, 2, 8, 5, 4, 6, 1, 9];

function isEven(arr) {
    return arr.length % 2 === 0;
}

function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }

    return arr;
}

/*
const arrOddSorted = sort(arrOdd);
const arrEvenSorted = sort(arrEven);

console.log("arrOddSorted = " + arrOddSorted);
console.log("arrEvenSorted = " + arrEvenSorted);
*/

function getMedian(arr) {
    sort(arr);

    let result;

    if (isEven(arr)) {

        const index1 = arr.length / 2;
        const index2 = index1 - 1;
        console.log("middle index1 = " + index1 + "; index2 = " + index2);
        result = (arr[index1] + arr[index2]) / 2;

    } else {

        const index = Math.floor(arr.length / 2);
        console.log("middle index = " + index);
        result = arr[index];

    }

    return result;
}

console.log("arrOdd median = " + getMedian(arrOdd));
console.log("arrEven median = " + getMedian(arrEven));