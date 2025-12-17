// Given a string s, find the length of the longest substring without duplicate characters.
var lengthOfLongestSubstring = function(s) {
    const seen = new Map();
    let longest = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (seen.has(c) && seen.get(c) >= start) {
            start = seen.get(c) + 1;
        }

        seen.set(c, i);
        
        const tmp = i - start + 1;
        if (tmp > longest) {
            longest = tmp;
        }
    }

    return longest;
};