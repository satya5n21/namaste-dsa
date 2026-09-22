const arr = [5, 2, 4, 4, 1];

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const midIdx = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, midIdx));
    const right = mergeSort(arr.slice(midIdx))

    return merge(left, right);
}

/**
 * @param {number[]} a1
 * @param {number[]} a2
 * @returns {number[]}
 */
function merge(a1, a2) {
    const len1 = a1.length;
    let i = 0;

    const len2 = a2.length;
    let j = 0;

    const resA = [];

    while (i < len1 && j < len2) {
        if (a1[i] <= a2[j]) {
            resA.push(a1[i]);
            i++;
        } else {
            resA.push(a2[j]);
            j++;
        }
    }

    for (; i < len1; i++) resA.push(a1[i]);
    for (; j < len2; j++) resA.push(a2[j]);

    return resA;
}

/** merge function test
console.log(merge([1, 3, 6], [4, 5, 6, 8, 12]));
console.log(merge([12], [4]));
console.log(merge([12, 32, 45], []));
console.log(merge([], []));
// */

// divide & conqure algorithms

console.log(mergeSort([2, 12, 4, 7, 3]));
console.log(mergeSort([]));
console.log(mergeSort([3]));
console.log(mergeSort([1, 2, 3, 5, 8]));
console.log(mergeSort([9, 6, 4, 2, 1]));