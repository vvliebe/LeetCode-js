/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var str = '#' + s.split('').join('#') + '#'
  var pos = 0
  var maxLen = 0
  var maxRight = 0
  var maxPos = 0
  var maxStr = ''
  var RL = []
  for (var i = 0; i < str.length; i++) {
    if (i < maxRight) {
      RL[i] = Math.min(maxRight - i, RL[2 * pos - i])
    } else {
      RL[i] = 1
    }
    while (i - RL[i] >= 0 && i + RL[i] < str.length && str[i - RL[i]] === str[i + RL[i]]) RL[i]++
      if (i + RL[i] - 1 > maxRight) {
        pos = i
        maxRight = i + RL[i] - 1
      }
    if (RL[i] > maxLen) {
      maxLen = RL[i]
      maxPos = i
    }
  }
  return s.substr((maxPos - maxLen + 1) / 2, maxLen - 1)
};

console.log(longestPalindrome('baab'))