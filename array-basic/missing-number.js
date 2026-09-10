/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const len = nums.length;
    const totalSum = (len * (len + 1)) / 2;
    let currSum = 0;
    for (let i = 0; i < len; i++) {
        currSum += nums[i];
    }

    return totalSum - currSum;
};

// brute-force approach
var missingNumber2 = function (nums) {
    const len = nums.length;

    nums = nums.sort();

    for (let i = 0; i < len; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            return nums[i] + 1;
        }
    }
};

console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8