/**
 * Created by vvliebe on 4/6/16.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {

    for (var i = 1; i < nums.length; i++) {
        if(nums[i]<nums[i-1])
            return nums[i];
    }
    return nums[0];
};