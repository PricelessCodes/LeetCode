/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let letters = new Set();
    let count = 0;
    
    for (let i = 0, j = 0; i < s.length; i++) {
    if (letters.has(s[i])) {
        
        if (count < letters.size) count = letters.size;

        j += 1;
        i = j;
        letters.clear();
        letters.add(s[i]);
        
    } else letters.add(s[i]);
}

if (count < letters.size) count = letters.size;

console.log(count);
    return count;
};