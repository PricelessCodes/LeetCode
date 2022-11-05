public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        
        //used to save first index
        Dictionary<int, int> map = new Dictionary<int, int>();

        //loop nums 
        for (int i = 0; i < nums.Length; i++)
        {
            //check if target - nums[i] equal to a existance key inside map and return map value (saved index) and current index (i) 
            if (map.ContainsKey(target - nums[i]))
                return new int[] {map[target - nums[i]], i};
            
            //check if nums[i] integer is no exist inside map to save it as key and its index as value
            if (!map.ContainsKey(nums[i]))
                map.Add(nums[i], i);
        }
        
        //return empty array if the are not exist 
        return new int[] {};
    }
}