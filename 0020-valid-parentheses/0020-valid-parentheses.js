/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    for (const l of s) {
        if (l === "(") stack.push(")");
        else if (l === "{") stack.push("}");
        else if (l === "[") stack.push("]");
        else if (l !== stack.pop()) return false;
    }

    return stack.length ? false : true;
};