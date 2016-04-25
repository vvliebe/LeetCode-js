/**
 * Created by vvliebe on 16/1/9.
 */

/**
 * 生成括号
 * 动态规划
 */



var generateParenthesis = function (n) {
    var res = [];
    var f = function (cur, left, right) {
        if (left == 0 && right == 0) {
            res.push(cur);
            return;
        }
        if (left > 0) {
            f(cur + '(', left - 1, right);
        }
        if (right > 0 && right > left) {
            f(cur + ')', left, right - 1);
        }
    };
    f('', n, n);
    return res;
};

console.log(generateParenthesis(4));
