class Solution {
public:
    int maxProfit(vector<int>& prices) {
        
        int j = 0;
        int prof = 0;
        
        for (int i = 0; i < prices.size(); i++)
        {
            if (prices[i] < prices[j])
                j = i;
            
            if (prices[i] - prices[j] > prof)
                prof = prices[i] - prices[j];
        }
        return prof;
    }
};