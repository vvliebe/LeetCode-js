/**
 * Created by vvliebe on 4/6/16.
 */
/**
 * @param {number} n
 * @return {number}
 */
/**
 * 1 -> 1
 * 2-9 -> 1
 * 10 -> 2
 * 11 -> 4
 * @param n
 * @returns {*}
 */
var countDigitOne = function (n) {
    if (n <= 0) return 0;
    var res = 0;
    var high = n;
    var low = 0, cur = 0;
    var number = 1;
    while (high > 0) {
        cur = high % 10;
        high = parseInt(high / 10);
        if (cur == 0) {
            res += high * number;
        } else if (cur == 1) {
            res += high * number + low + 1;
        } else {
            res += (high + 1) * number;
        }
        low += cur * number;
        number *= 10;
    }
    return res;
};

console.log(countDigitOne(245));