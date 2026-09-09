/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (m + n === 0) return nums1;

    const nums1c = nums1.slice(0, m);
    let i = 0; let j = 0;
    while (i < m && j < n) {
        if (nums2[j] > nums1c[i]) {
            nums1[i + j] = nums1c[i];
            i++;
        } else {
            nums1[i + j] = nums2[j];
            j++;
        }
    };

    if (i !== m) {
        while (i < m) {
            nums1[i + j] = nums1c[i];
            i++;
        }
    } else if (j !== n) {
        while (j < n) {
            nums1[i + j] = nums2[j];
            j++;
        }
    }

    return nums1;
}

// correct solution but without nums1 inplace conversion
var merge2 = function (nums1, m, nums2, n) {
    const sortedArr = [];
    let i = 0; let j = 0;
    while (i < m && j < n) {
        if (nums2[j] > nums1[i]) {
            sortedArr.push(nums1[i]);
            i++;
        } else {
            sortedArr.push(nums2[j]);
            j++;
        }
    };
    if (i !== m) {
        while (i < m) {
            sortedArr.push(nums1[i]);
            i++;
        }
    } else if (j !== n) {
        while (j < n) {
            sortedArr.push(nums2[j]);
            j++;
        }
    }

    nums1 = sortedArr;
    // return nums1;
};

// brute force apparach (not fully correct for some testcases)
var merge3 = function (nums1, m, nums2, n) {
    for (let i = m, j = 0; i < nums1.length; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort();
    return nums1;
};

console.log(merge(nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));