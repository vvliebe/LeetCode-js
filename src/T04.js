/**
 * Created by vvliebe on 15/11/18.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArraysError = function (nums1, nums2) {
    var l1 = nums1.length;
    var l2 = nums2.length;

    if (l1 > l2) {
        return findMedianSortedArrays(nums2, nums1);
    }

    if (l2 == 0) return 0;

    var m1l = parseInt((l1 - 1) / 2);
    var m1r = parseInt(l1 / 2);
    var m2l = parseInt((l2 - 1) / 2);
    var m2r = parseInt(l2 / 2);

    if (l1 == 0) return (nums2[m2l] + nums2[m2r]) / 2;

    if (l1 == 1) {
        if (l2 == 1) {
            return (nums1[0] + nums2[0]) / 2;
        } else if (l2 % 2 == 0) {
            if (nums1[0] < nums2[m2l]) {
                return nums2[m2l];
            } else if (nums1[0] > nums2[m2r]) {
                return nums2[m2r];
            } else {
                return nums1[0];
            }
        } else {
            if (nums1[0] < nums2[m2l - 1]) {
                return (nums2[m2l] + nums2[m2l - 1]) / 2;
            } else if (nums1[0] > nums2[m2r + 1]) {
                return (nums2[m2r] + nums2[m2r + 1]) / 2;
            } else {
                return (nums2[m2l] + nums1[0]) / 2;
            }
        }
    } else {
        var cutLen = l1 > l2 ? parseInt(l2 / 2) : parseInt(l1 / 2);
        if (((nums1[m1l] + nums1[m1r]) / 2) < ((nums2[m2l] + nums2[m2r]) / 2)) {
            nums1.splice(0, cutLen);
            nums2.splice(l2 - cutLen, cutLen);
        } else if (((nums1[m1l] + nums1[m1r]) / 2) > ((nums2[m2l] + nums2[m2r]) / 2)) {
            nums1.splice(l1 - cutLen, cutLen);
            nums2.splice(0, cutLen);
        } else {
            return (nums1[m1l] + nums1[m1r]) / 2;
        }
        console.log(nums1, nums2);
        return findMedianSortedArrays(nums1, nums2);
    }
};


var findMedianSortedArrays = function (nums1, nums2) {
    var n1 = nums1.length;
    var n2 = nums2.length;

    if (n1 < n2)
        return findMedianSortedArrays(nums2, nums1);

    var left = 0;
    var right = 2 * n2;
    while (left <= right) {
        var mid2 = parseInt((left + right) / 2);
        var mid1 = n1 + n2 - mid2;

        // 每次取出两个数组中间的4个数
        var L1 = mid1 == 0 ? Number.MIN_VALUE : nums1[parseInt((mid1 - 1) / 2)];    // 左边界  小的数极小
        var L2 = mid2 == 0 ? Number.MIN_VALUE : nums2[parseInt((mid2 - 1) / 2)];
        var R1 = mid1 == 2 * n1 ? Number.MAX_VALUE : nums1[parseInt(mid1 / 2)];     // 右边界  大的数极大
        var R2 = mid2 == 2 * n2 ? Number.MAX_VALUE : nums2[parseInt(mid2 / 2)];

        console.log("left: " + left);
        console.log("right: " + right);
        console.log("mid1: " + mid1);
        console.log("mid2: " + mid2);
        console.log("L1: " + L1);
        console.log("R1: " + R1);
        console.log("L2: " + L2);
        console.log("R2: " + R2);
        console.log("=======================");

        // 如果中间的四个数相互交叉，可以证明，这四个数的中位数就是两个数组的中位数，如果不交叉，则调整下一次循环的搜索范围，排除小数组个数的数
        if (L1 > R2) {
            left = mid2 + 1;
        } else if (L2 > R1) {
            right = mid2 - 1;
        } else {
            console.log("left: " + left);
            console.log("right: " + right);
            console.log("mid1: " + mid1);
            console.log("mid2: " + mid2);
            console.log("L1: " + L1);
            console.log("R1: " + R1);
            console.log("L2: " + L2);
            console.log("R2: " + R2);
            console.log("=======================");
            return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
        }

    }

    return -1;
};


var num1 = [2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 16, 18,19,20,122,1233,11111,1111111];           // (8 - 1) / 2 = 3     8 => 3 , 4  8/2=4 (8-1)/2=3

var num2 = [4, 5, 6, 7, 8, 15, 1111, 9888, 10000];                       // (5 - 1) / 2 = 2     5 => 2 , 2  5/2=2 (5-1)/2=2

console.log(findMedianSortedArrays(num2, num1));
