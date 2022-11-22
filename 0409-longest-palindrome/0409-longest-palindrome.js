/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let count = new Array(128).fill(0);
    
    for (const c of s) {
        count[c.charCodeAt(0)]++;
    }
    
    let total = count.reduce((pc, cc) => {
        pc += cc - (cc % 2);
        if (pc % 2 == 0 && cc % 2 == 1) pc++;
        return pc;
    }, 0);
    
    return total;
};