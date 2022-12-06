/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    
    if (x < 0) return false;

    if (x < 10) return true;

    //convert x to string
    x = x.toString();

    let start = 0;
    let end = x.length - 1;

    while (start < end) {
        if (x[start] !== x[end]) return false;

        start++;
        end--;
    }

    return true;
};