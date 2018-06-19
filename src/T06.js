/**
 * Z字形变换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  var res = ''
  var arr = []
  var row = 0
  var direct = 1
  for (var i = 0; i < s.length; i++) {
    arr[row] = (arr[row] || '') + s[i]
    if (row === 0) {
      direct = 1
    } else if (row === numRows - 1) {
      direct = -1
    }
    row += direct
  }
  return arr.reduce((a, b) => a.concat(b), '')
};

console.log(convert('PAYPALISHIRING', 3))