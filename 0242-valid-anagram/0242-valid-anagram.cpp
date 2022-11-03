class Solution {
public:
    bool isAnagram(string s, string t) {
        
        /*if (s.length() != t.length())
            return false;
        
        sort(s.begin(), s.end());
          sort(t.begin(), t.end());
        
        if (s == t)
            return true;
        else
            return false;
        */
        
        if(s.length() != t.length())
            return false;
        
        map<char, int> m;
        
        for(int i = 0; i < s.length(); i++){
            m[s[i]] +=1;
            m[t[i]] -=1;
        }
        
        for(int i = 0; i < s.length(); i++)
            if(m[s[i]] != 0)
                return false;
        
        return true;
    }
};