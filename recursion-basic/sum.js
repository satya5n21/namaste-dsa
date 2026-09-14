
function sum(n) {
    if (n < 1) return 0;
    return sum(n - 1) + n;
}

console.log(sum(5));