/**
 * 中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var n1 = nums1.length;
  var n2 = nums2.length;

  if (n1 < n2) return findMedianSortedArrays(nums2, nums1);

  var left = 0;
  var right = 2 * n2;
  while (left <= right) {
    var mid2 = parseInt((left + right) / 2);
    var mid1 = n1 + n2 - mid2;

    // 每次取出两个数组中间的4个数
    var L1 = mid1 == 0 ? Number.MIN_VALUE : nums1[parseInt((mid1 - 1) / 2)]; // 左边界  小的数极小
    var L2 = mid2 == 0 ? Number.MIN_VALUE : nums2[parseInt((mid2 - 1) / 2)];
    var R1 = mid1 == 2 * n1 ? Number.MAX_VALUE : nums1[parseInt(mid1 / 2)]; // 右边界  大的数极大
    var R2 = mid2 == 2 * n2 ? Number.MAX_VALUE : nums2[parseInt(mid2 / 2)];

    // 如果中间的四个数相互交叉，可以证明，这四个数的中位数就是两个数组的中位数，如果不交叉，则调整下一次循环的搜索范围，排除小数组个数的数
    if (L1 > R2) {
      left = mid2 + 1;
    } else if (L2 > R1) {
      right = mid2 - 1;
    } else {
      return (Math.max(L1, L2) + Math.min(R1, R2)) / 2;
    }
  }
  return -1;
};


var num1 = [2, 3, 5, 6, 7, 8, 9, 10, 12, 13, 16, 18, 19, 20, 122, 1233, 11111, 1111111]; // (8 - 1) / 2 = 3     8 => 3 , 4  8/2=4 (8-1)/2=3

var num2 = [4, 5, 6, 7, 8, 15, 1111, 9888, 10000]; // (5 - 1) / 2 = 2     5 => 2 , 2  5/2=2 (5-1)/2=2

console.log(findMedianSortedArrays(num2, num1));