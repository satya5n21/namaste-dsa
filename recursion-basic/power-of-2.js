/**
 * @param {number} n
 * @return {boolean}
 */
// solution 1
var isPowerOfTwo = function (n) {
    if (n === 1) return true;
    else if ((n % 2) !== 0 || n < 1) return false;

    return isPowerOfTwo(n / 2);
};

// solution 2
var isPowerOfTwo2 = function (n) {
    if (n <= 1) return n === 1;

    if (n % 2 !== 0) return false;

    return isPowerOfTwo2(n / 2);
};

// solution 3
var isPowerOfTwo3 = function (n, x = 0) {
    const rslt = 2 ** x;
    if (rslt >= n) return rslt === n;

    if (n % 2 !== 0) return false;

    return isPowerOfTwo3(n, ++x);
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));