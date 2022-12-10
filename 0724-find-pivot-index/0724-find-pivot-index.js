/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    //get sum of all numbers
    let right = nums.reduce((pv, cv) => pv + cv, 0);

    let left = 0;

    for (let i = 0; i < nums.length; i++) {

        //check if sum1 - left nums - pivot equal to left
        if ((right - left - nums[i]) === left) return i;

        left += nums[i];
    }

    return -1;
};