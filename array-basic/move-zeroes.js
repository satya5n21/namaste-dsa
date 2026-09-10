/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    const len = nums.length;
    while (j < nums.length) {
        nums[j] = 0;
        j++;
    }
    return nums;
}

// brute-forece approach
var moveZeroes2 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let j = i;
            for (j; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1];
            }
            nums[nums.length - 1] = 0;
            // console.log(nums);
        }
    }
    return nums;
};

// 2 pointer pattern

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([2, 1]));
console.log(moveZeroes([1, 0, 1]));