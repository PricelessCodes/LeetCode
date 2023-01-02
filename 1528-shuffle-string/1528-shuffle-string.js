/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    
    const res = new Array(s.length);  
    
    for(let i = 0; i < res.length; i++) {
        res[indices[i]] = s[i];
    }
    return res.join("");  
};