/**
 * @param {number} n
 * @return {number}
 */
// with recursion
var fib = function (n, prev = 0, curr = 1) {
    if (n === 0) return prev;

    let temp = curr;
    curr = curr + prev;
    prev = temp;
    return fib(--n, prev, curr);
};

// with help of for loop
var fib2 = function (n) {
    let prev = 0;
    let curr = 1;
    for (let i = 0; i < n; i++) {
        let temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    return prev;
}

// with help of for loop + array
var fib3 = function (n) {
    if (n === 0) return 0;

    let arr = [0, 1];
    let i = 2;
    for (i; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[i - 1];
}

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(0)); // 0