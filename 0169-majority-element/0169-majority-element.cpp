class Solution {
public:
    int majorityElement(vector<int>& nums) {
        
        int majority = 0;
        int count = 0;
        
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] == nums[majority])
                count++;
            else
                count--;
            
            if (count == 0)
            {    
                majority = i;
                count = 1;
            }
        }
        
        return nums[majority];
    }
};