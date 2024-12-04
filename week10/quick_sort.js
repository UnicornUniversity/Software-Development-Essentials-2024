function quickSort(arr){
    if (arr.length < 2) return arr;

    const chosenItem = arr[0];
    const leftArray = [];
    const rightArray = [];

    for (let i = 1; i < arr.length; i++) {
        const item = arr[i];
        if (item <= chosenItem){
            leftArray.push(item);
        } else {
            rightArray.push(item);
        }
    }

    const leftSorted = quickSort(leftArray);
    const rightSorted = quickSort(rightArray);

    const result = [];

    for (let i = 0; i < leftSorted.length; i++) {
        result.push(leftSorted[i]);
    }

    result.push(chosenItem);

    for (let i = 0; i < rightSorted.length; i++) {
        result.push(rightSorted[i]);
    }

    return result;
}

console.log(quickSort([7, 5, 1, 15, 8]));