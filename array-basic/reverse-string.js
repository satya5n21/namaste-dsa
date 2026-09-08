/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let i = 0;
    let temp;
    let n = Math.floor(s.length);
    while (i < n / 2) {
        temp = s[i];
        s[i] = s[n - 1 - i];
        s[n - 1 - i] = temp;
        i++;
    }
    return s;
}


var reverseString2 = function (s) {
    let i = 0;
    let j = s.length - 1;
    let temp;
    while (i < j) {
        // temp = s[i];
        // s[i] = s[j];
        // s[j] = temp;
        [s[i], s[j]] = [s[j], s[i]];
        i++; j--;
    }
    return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["a", "b", "c", "d", "e"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
console.log(reverseString(["H"]));
console.log(reverseString([]));

// 2 pointer pattern
