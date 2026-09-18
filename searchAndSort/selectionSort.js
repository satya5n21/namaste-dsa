const arr = [7, 1, 5, 4, 3, 2];

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function selectionSort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let minIdx = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (i === minIdx) break;
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        // console.log("--", arr);
    }

    return arr;
}

console.log(selectionSort(arr));