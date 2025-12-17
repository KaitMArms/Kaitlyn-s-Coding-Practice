# Given a string s, find the length of the longest substring without duplicate characters.

class LongestSubStr(object):
    def solution(self, s):
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
    
def main():
    lss = LongestSubStr()
    test_str = "abcabcbb"
    result = lss.solution(test_str)
    print(f'Longest substring without duplicates in "{test_str}": {result}')
    
if __name__ == "__main__":
    main()