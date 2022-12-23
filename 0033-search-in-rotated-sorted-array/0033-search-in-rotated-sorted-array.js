/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let i = 0,
        j = nums.length - 1;

    while (i < j) {
        
        let mid = i + Math.floor((j - i + 1) / 2);

        // if target at mid
        if (nums[mid] === target) return mid;

        //if left side is sorted
        if (nums[i] <= nums[mid]) {
            //if target on the left side
            if (nums[i] <= target && target <= nums[mid]) j = mid - 1;
            //if target on the right side
            else i = mid + 1;
        }
        //if right side is sorted
        else{
            //if target on the right side
            if (nums[mid] <= target && target <= nums[j]) i = mid + 1;
            //if target on the left side
            else j = mid - 1;
        }
    }
    return nums[i] === target ? i : -1;
};