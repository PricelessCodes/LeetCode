/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let letters = new Set();
    let count = 0;
    
    for (let i = 0, j = 0; i < s.length; i++) {
        
        if (letters.has(s[i])) {
            count = Math.max(count, letters.size);
            letters.delete(s[j]);
            j++;
            i--;
        } else letters.add(s[i]);
    }
    
    count = Math.max(count, letters.size);
   
    return count;
};