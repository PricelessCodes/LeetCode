/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    //holds count of each letter. starts with zeros
    let count = new Array(26).fill(0);
    
    //count each letter inside magazine
    for (const l of magazine) {
        count[l.charCodeAt(0) - 97]++;
    }
    
    //loop on ransomNate and reduce the count of each found character if bigger than 0
    //else return false
    for (const l of ransomNote) {
        const c = count[l.charCodeAt(0) - 97];
        
        if (c > 0) count[l.charCodeAt(0) - 97]--;
        else return false;
    }
    
    return true;
};