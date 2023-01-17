/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    
    //if both string are epmpty or s is empty
    if (!s || (!s && !t))
        return true;
    
    while(j < t.length && i < s.length) {
        
        //if 2 characters are equal increment i to check for the next character in s
        if (s[i] === t[j])
            i++;
        
        //increment j  
        j++;
        
        //if all the characters in s are in t return true
        if (i == s.length)
            return true;
    }
    
    //return false if s is not exist in t
    return false;
};