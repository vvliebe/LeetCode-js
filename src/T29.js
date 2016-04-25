/**
 * Created by vvliebe on 16/1/10.
 */
/**
 * 实现除法
 * @param dividend
 * @param divisor
 */
var divide = function (dividend, divisor) {
    var isLtZero = true;
    if (dividend < 0) {
        dividend = -dividend;
        isLtZero = !isLtZero;
    }
    if (divisor < 0) {
        divisor = -divisor;
        isLtZero = !isLtZero;
    }
    if (dividend == 0 || divisor == 1) {
        return !isLtZero ? -dividend : dividend >= 2147483648 ? 2147483647 : dividend;
    }
    var res = 0;
    while (dividend >= divisor) {
        //console.log(dividend, divisor);
        var tmp = divisor;
        var tmpRes = 1;
        while (dividend >> 1 > tmp){
            tmp <<= 1;
            tmpRes <<= 1;
            console.log(tmp, tmpRes);
        }
        res += tmpRes;
        dividend -= tmp;
    }
    return !isLtZero ? -res : res >= 2147483648 ? 2147483647 : res;
};

console.log(divide(-2147483647,-1));