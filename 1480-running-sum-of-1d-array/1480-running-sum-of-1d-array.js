/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let sum = [nums[0]];

    for (let index = 1; index < nums.length; index++) {
        sum[index] = sum[index - 1] + nums[index]; 
    }

    return sum;
};