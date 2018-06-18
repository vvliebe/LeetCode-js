/**
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {}
    for (var i = 0; i < nums.length; i++) {
      var left = target - nums[i]
      if (map[nums[i]] !== undefined) {
        return [map[nums[i]], i]
      } else {
        map[left] = i
      }
    }
    return []
};

console.log(twoSum([1, 2, 5, 9], 11))
