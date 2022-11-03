class Solution {
public:
    bool isPalindrome(string s) {
        
        int i = 0;
        int j = s.length() - 1;
        
        while(i < j)
        {
            if(tolower(s[i]) == tolower(s[j]))
            {
                i++;
                j--;
            }
            else if(!isalnum(s[i])) i++;
            else if(!isalnum(s[j])) j--;
            else return false;
        }
        
       return true;
    }
};