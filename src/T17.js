/**
 * Created by vvliebe on 15/11/20.
 */

var letterCombinations = function (digits) {
    if(!digits) return [];    //考虑输入空串的情况

    var maps = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    var strs = digits.split('').map(function (data) {
        return maps[data];
    });

    var res = [];
    var str = "";
    var count = function (curLen, targetLen) {
        if (curLen == targetLen) {  // 当字符串长度已经达到目标个数的时候，停止递归
            return res.push(str);
        } else {
            for (var i = 0; i < strs[curLen].split('').length; i++) {
                str += strs[curLen][i];   // step 1 : 增加当前字符
                count(curLen + 1, targetLen); // step 2 : 递归调用
                str = str.substr(0, str.length - 1);  // step 3 : 减去当前字符，继续for循环的下一次执行
            }
        }
    };

    count(0, strs.length);

    return res;
};

var ds = "23";

console.log(letterCombinations(ds));