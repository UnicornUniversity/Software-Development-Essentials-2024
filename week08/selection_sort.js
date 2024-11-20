const arr = [6, 1, 4, 7];

for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length - 1; j++) {
        if (arr[j] < arr[minIndex]){
            minIndex = j;
        }
    }

    if (minIndex !== i){
        const tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
}

console.log(arr);