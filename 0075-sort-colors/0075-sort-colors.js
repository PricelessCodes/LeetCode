/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let zerosCount = 0;
    let onesCount = 0;
    let twosCount = 0;

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];

        if (element === 0) zerosCount++;
        else if (element === 1) onesCount++;
        else if (element === 2) twosCount++;
    }

    for (let index = 0; index < nums.length; index++) {
        if (zerosCount) {
            nums[index] = 0;
            zerosCount--;
        } else if (onesCount) {
            nums[index] = 1;
            onesCount--;
        } else if (twosCount) {
            nums[index] = 2;
            twosCount--;
        }
    }

    return nums;
};