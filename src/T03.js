/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var maxLen = 0
  var startIndex = 0
  var visit = {}
  for (var i = 0; i < s.length; i++) {
    if (visit[s[i]] !== undefined) {
      startIndex = Math.max(visit[s[i]] + 1, startIndex)
    }
    visit[s[i]] = i
    if (i - startIndex + 1 >= maxLen) {
      maxLen = i - startIndex + 1
    }
  }
  return maxLen
};

console.log(lengthOfLongestSubstring('abccabddefglj08'))
