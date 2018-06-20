/**
 * 回文数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return String(x).split('').reverse().join('') == x
};

console.log(isPalindrome(123211))