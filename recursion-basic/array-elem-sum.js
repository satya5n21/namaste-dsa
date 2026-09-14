/**
 * @param {number[]} arr
 * @returns {number}
 */
function sum(arr) {
    if (arr.length === 1) return arr[0];

    return arr[0] + sum(arr.slice(1));
};

const a = [5, 2, 0, 3, 6, 7];
/**
 * @param {number} n // index
 * @returns {number}
 */
function sumByIndex(n) {
    if (n === 0) return a[0];

    return a[n] + sumByIndex(n - 1);
}

function sumOddByIndex(n) {
    const isEven = a[n] % 2 === 0;

    if (n === 0) return isEven ? 0 : a[0];

    return isEven ? sumOddByIndex(n - 1) : a[n] + sumOddByIndex(n - 1)
}

// console.log(sum(a));
console.log(sumOddByIndex(a.length - 1));