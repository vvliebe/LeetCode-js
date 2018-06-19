/**
 * 反转整数
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sum = 0
    var ratio = 1
    if (x < 0) {
      ratio = -1
      x *= -1
    }
    while (x) {
      var num = x % 10
      sum = sum * 10 + num
      if (ratio === 1 && sum > Math.pow(2, 31) - 1) return 0
      if (ratio === -1 && sum > Math.pow(2, 31)) return 0
      x = (x - num) / 10
    }
    return sum * ratio
};

console.log(reverse(123))
