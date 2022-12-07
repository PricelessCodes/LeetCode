/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    //store the product of prefix and suffix into the final answer array
    let answer = new Array(nums.length);

    let product = 1;

    for (let index = 0; index < nums.length; index++) {
        answer[index] = product;
        product *= nums[index];
    }

    console.log(answer);

    product = 1;

    for (let index = nums.length - 1; index >  -1; index--) {
        answer[index] *= product;
        product *= nums[index];
    }

    return answer;
};