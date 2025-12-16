// Given a string s, find the length of the longest substring without duplicate characters.
#include <iostream>
#include <string>
#include <unordered_map>

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        std::unordered_map<char, int> seen;  
        int longest = 0;
        int start = 0;  

        for (int i = 0; i < s.length(); ++i) {
            char c = s[i];

            if (seen.find(c) != seen.end() && seen[c] >= start) {
                start = seen[c] + 1;
            }

            seen[c] = i;
            int tmp = i - start + 1;   
            if (tmp > longest) longest = tmp;
        }

        return longest;
    }
};