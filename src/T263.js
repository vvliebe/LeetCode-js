/**
 * Created by vvliebe on 4/6/16.
 */
var isUglyNumber = function (n) {
    if (n == 1) return true;
    if (n % 2 == 0) return isUglyNumber(n / 2);
    if (n % 3 == 0) return isUglyNumber(n / 3);
    if (n % 5 == 0) return isUglyNumber(n / 5);
    return false;
};