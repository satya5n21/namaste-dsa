/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;

    for (i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break;
        }

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }

    return nums1;
}

// correct solution: 2
var merge2 = function (nums1, m, nums2, n) {
    let nums1copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < m + n; i++) {
        if (p2 >= n || (p1 < m && nums1copy[p1] < nums2[p2])) {
            nums1[i] = nums1copy[p1];
            p1++;
        } else {
            nums1[i] = nums2[p2];
            p2++;
        }
    }
    return nums1;
}

// correct solution: 3
var merge3 = function (nums1, m, nums2, n) {
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
var merge4 = function (nums1, m, nums2, n) {
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
var merge5 = function (nums1, m, nums2, n) {
    for (let i = m, j = 0; i < nums1.length; i++, j++) {
        nums1[i] = nums2[j];
    }
    nums1.sort();
    return nums1;
};

console.log(merge(nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));