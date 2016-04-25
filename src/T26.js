/**
 * Created by vvliebe on 16/1/10.
 */

//var removeDuplicates2 = function (nums) {
//    nums = nums.filter((data, index, array) => {
//        return index == 0 || data != array[index - 1];
//    });
//
//    return nums.length;
//};
/**
 * 数组去重
 * @param nums
 * @returns {*}
 */
var removeDuplicates = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        if (i != 0 && nums[i] == nums[i - 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};


console.log(removeDuplicates([1, 1, 2, 2, 4, 5, 6]));