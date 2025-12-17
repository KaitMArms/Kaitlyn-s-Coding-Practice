// Given a string s, find the length of the longest substring without duplicate characters.
import java.util.*;

class longestSubStr {
    public int solution(String s) {
        Map<Character, Integer> seen = new HashMap<>();
        int longest = 0;
        int start = 0;

        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if(seen.containsKey(c) && seen.get(c) >= start){
                start = seen.get(c) + 1;
            }

            seen.put(c, i);
            int tmp = i - start + 1;
            if(tmp > longest){longest = tmp;}
        }
        return longest;
    }

    public static void main(String[] args) {
        longestSubStr lss = new longestSubStr();
        String testStr = "abcabcbb";
        int result = lss.solution(testStr);
        System.out.println("Longest substring without duplicates in \"" + testStr + "\": " + result);
    }
}
