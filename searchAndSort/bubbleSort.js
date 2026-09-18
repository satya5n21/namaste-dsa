const arr = [5, 2, 4, 4, 1];

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let swapping = false;
        for (j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapping = true;
            }
        }
        if (!swapping) break;
    }
    return arr;
}

console.log(bubbleSort(arr));
console.log(bubbleSort(arr));