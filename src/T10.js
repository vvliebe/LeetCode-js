/**
 * 正则表达式匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0) return s.length === 0
  if (p.length === 1) return s.length === 1 && (s[0] === p[0] || p[0] === '.')
  if (p[1] !== '*') {
    if (s.length === 0) return false
    return (s[0] === p[0] || p[0] === '.') && isMatch(s.substring(1), p.substring(1))
  } else {
    while (s.length > 0 && (s[0] === p[0] || p[0] === '.')) {
      if (isMatch(s, p.substring(2))) return true
      s = s.substring(1)
    }
    return isMatch(s, p.substring(2))
  }
};

console.log(isMatch('abbssccc',  'ab*s*c*'))