const nums = [-1, 0, 3, 5, 9, 12];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (nums[middle] === target) return middle;
        else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

console.log(binarySearch(nums, 9));
console.log(binarySearch(nums, -1));
console.log(binarySearch(nums, 0));
console.log(binarySearch(nums, 10));

