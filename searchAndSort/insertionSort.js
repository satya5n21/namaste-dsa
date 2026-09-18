const arr = [5, 2, 4, 4, 1];

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
// classic approach
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {

        let curr = arr[i];
        let p = i - 1;

        while (p >= 0 && arr[p] > curr) {
            arr[p + 1] = arr[p];
            p--;
        }

        arr[p + 1] = curr;
    }
    return arr;
}

// swap based version
function insertionSort2(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            } else {
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort(arr));
console.log(insertionSort([7, 4, 3, 5, 1, 2]));
console.log(insertionSort([7, 6, 5, 4, 2, 1]));
console.log(insertionSort([2]));
console.log(insertionSort([]));