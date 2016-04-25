/**
 * Created by vvliebe on 15/11/20.
 */
/**
 * 在给定的数组中找出不重复的四元组，每组的4个数字之和为给定的数
 * 思路:
 * 1. 数组排序
 * 2. 选定前两个数，后两个数一个循环
 */

var fourSum = function (nums, target) {
    if (!nums || nums.length < 4) return [];

    var res = [];

    nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {  // 排除重复组
            continue;
        }
        for (var j = i + 1; j < nums.length - 2; j++) {
            if (j != i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }
            var left = j + 1;
            var right = nums.length - 1;

            while (left < right) {
                var sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    res.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] == nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] == right[right + 1]) {
                        right--;
                    }
                }
            }
        }
    }
    return res;
};

console.log(fourSum([1, 2, 3, 4, 5, 6, 7], 10));

