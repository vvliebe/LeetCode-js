/**
 * Created by vvliebe on 16/1/10.
 */
/**
 * 删除指定元素
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

console.log(removeElement([1, 1, 2, 2, 4, 5, 6],1));