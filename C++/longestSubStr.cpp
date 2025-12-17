// Given a string s, find the length of the longest substring without duplicate characters.
#include <iostream>
#include <string>
#include <unordered_map>

using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> seen;
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

int main() {
    Solution sol;

    string s1 = "abcabcbb";
    string s2 = "bbbbb";
    string s3 = "pwwkew";

    cout << "Input: " << s1 << " -> " << sol.lengthOfLongestSubstring(s1) << endl;
    cout << "Input: " << s2 << " -> " << sol.lengthOfLongestSubstring(s2) << endl;
    cout << "Input: " << s3 << " -> " << sol.lengthOfLongestSubstring(s3) << endl;

    return 0;
}