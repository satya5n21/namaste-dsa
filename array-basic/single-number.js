/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor;
}

var singleNumber = function (nums) {
    let numCounts = {};

    for (let i = 0; i < nums.length; i++) {
        if (!numCounts[nums[i]]) {
            numCounts[nums[i]] = 1;
        } else {
            numCounts[nums[i]]++;
        }
    }

    for (const num in numCounts) {
        if (numCounts[num] === 1) {
            return num;
        }
    }

    return 0;
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
