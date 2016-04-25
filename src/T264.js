/**
 * Created by vvliebe on 4/6/16.
 */
/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function (n) {
    if (n == 1) return 1;
    var p = 1;
    var l2 = l3 = l5 = 0;
    var res = [1];
    while (p < n) {
        res[p] = Math.min(Math.min(res[l2] * 2, res[l3] * 3), res[l5] * 5);
        while (res[l2] * 2 <= res[p]) l2++;
        while (res[l3] * 3 <= res[p]) l3++;
        while (res[l5] * 5 <= res[p]) l5++;
        p++;
    }
    return res[--p];
};

for(var i =1;i<20;i++) {
    console.log(nthUglyNumber(i));
}

