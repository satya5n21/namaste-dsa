const arr = [4, 9, 1, 0, 2];

/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number} index
 */
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

console.log(linearSearch(arr, 0));
console.log(linearSearch(arr, 2));
console.log(linearSearch(arr, 12));
