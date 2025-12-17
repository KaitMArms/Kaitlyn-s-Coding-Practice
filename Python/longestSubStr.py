# Given a string s, find the length of the longest substring without duplicate characters.

class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        seen = {}
        longest = 0
        start = 0

        for i in range(len(s)):
            c = s[i]
            if c in seen and seen[c] >= start:
                start = seen[c] + 1
            seen[c] = i
            tmp = i - start + 1
            if tmp > longest:
                longest = tmp
        return longest