/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};


console.log(removeElement([3, 2, 2, 3], 3));

// for this 2 pointer pattern, x is maintaining the position while i iterates and checks what needs to be shifted