/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    //Fibonacci Series
    
    if (n < 4) return n;
    
    let ways = 0;
    
    let n1 = 2;
    let n2 = 3;
    
    for (let index = 3; index < n; index++) {
        let temp = n1;
        n1 = n2;
        n2 += temp;
    }
    
    return n2;
};