/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    //sort array and u will have  how many numbers in the array are smaller than
    //each value according to its index
    let sorted = nums.slice().sort((a,b) => a - b);
    //create hash to save the number 
    //and its index ( how many numbers in the array are smaller than it)  
    let hash = new Map();
    sorted.forEach((number, idx) => hash.has(number)? null: hash.set(number, idx));
    //then map it to new array according to its orignal location before sorting
    return nums.map(x => hash.get(x));
    
};