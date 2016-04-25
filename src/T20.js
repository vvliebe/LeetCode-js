/**
 * Created by vvliebe on 16/1/8.
 */

var isValid = function (s) {
    var map = {
        '[': ']',
        ']': '[',
        '(': ')',
        ')': '(',
        '{': '}',
        '}': '{'
    };
    var stack = ['_'];
    for (var c in s) {
        var topC = stack[stack.length - 1];
        if (map[topC] == s[c]) {
            stack.pop();
        } else {
            stack.push(s[c]);
        }
    }
    return stack.pop() == '_';
};

console.log(isValid('[]{}[[[(]]]'));