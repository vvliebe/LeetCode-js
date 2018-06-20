/**
 * 字符串转整数 (atoi)
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  var matches =  /^[-+]?\d+/.exec(str.trim())
  if (!matches) return 0
  var res = +matches[0]
  var max = Math.pow(2, 31) - 1
  var min = -Math.pow(2, 31)
  if (res > max) return max
  if (res < min) return min
  return res
};

console.log(myAtoi('1-11'))
console.log(myAtoi('    -11'))
console.log(myAtoi('+11.11'))
console.log(myAtoi('-'))
console.log(myAtoi('+'))
console.log(myAtoi('9999999999999999999999911'))
console.log(myAtoi('-9999999999999999999999911'))
