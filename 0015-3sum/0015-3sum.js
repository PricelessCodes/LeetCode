/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let output = [];
    let target = 0;

    // sort for doing the 2sum algorithm in O(n)
    nums.sort((a, b) => a - b);

    for (let index = 0; index < nums.length - 2; index++) {
        //values bigger target will not have 3sums so break
        if (nums[index] > target) break;

        //we don't want repeats, so skip numbers we have already seen
        if (index > 0 && nums[index] === nums[index - 1]) continue;

        //left and right pointers for the doing 2sum algorithm
        let i = index + 1,
            j = nums.length - 1;

        while (i < j) {
            //sum of 3
            let sum = nums[index] + nums[i] + nums[j];

            // if sum of 3 = target which is 0 for this problem add the 3 numbers to output
            if (sum === target) {
                output.push([nums[index], nums[i], nums[j]]);

                //if there is duplicate after nums[i] and nums[j] skip them
                while (nums[i] === nums[i + 1]) i++;
                while (nums[j] === nums[j - 1]) j--;
                //decrement j and increment i one more time to skip the last duplicate numbers
                i++;
                j--;
            }
            // if the sum is large, decrement j to get closer to the target
            else if (sum >= target) j--;
            // if the sum is small, increment i to get closer to the target
            else i++;
        }
    }

    return output;
};