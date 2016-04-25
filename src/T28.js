/**
 * Created by vvliebe on 16/1/10.
 */
/**
 * string index of string
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr('hello world', 'el'));