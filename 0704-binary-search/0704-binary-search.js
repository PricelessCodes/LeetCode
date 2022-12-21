/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0, j = nums.length - 1;
    
    while(i < j){
        let mid = i + Math.floor((j - i + 1) / 2);
        
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] < target)
            i = mid;
        else
            j = mid - 1;
    }
    
    return nums[i] === target ? i : -1;
};