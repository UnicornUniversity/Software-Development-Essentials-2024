const arr = [6, 1, 4, 7];

let swapped = true;

while (swapped) {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            const tmp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = tmp;

            swapped = true;
        }
    }
}

console.log(arr);