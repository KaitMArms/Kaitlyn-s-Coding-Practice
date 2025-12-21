/*Determine if a string containing only ()[]{} is valid. To be valid each open must have a closing
Input: string Output: boolean
Constaints: 1 ≤ s.length ≤ 10⁴ && Only characters ()[]{}*/
import java.util.*;
class ValidParentheses {
    public boolean validParentheses(String s){
        Set<Character> openSet = new HashSet<>(Set.of('(', '[', '{'));
        Set<Character> closedSet = new HashSet<>(Set.of(')', ']', '}'));
        HashMap<Character, Character> mapping = new HashMap<>(Map.of(
            ')', '(',
            ']', '[',
            '}', '{'
        ));
        Stack<Character> openChars = new Stack<>();

        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);

            if(openSet.contains(c)){
                openChars.add(c);
            }
            else if(closedSet.contains(c)){
                if(openChars.isEmpty() || !Objects.equals(openChars.peek(), mapping.get(c))) {return false;}
                openChars.pop();
            }
            else{return false;}
        }

        return openChars.isEmpty();
    }

    public static void main(String[] args){
        String[] testCases = {
            "()",
            "()[]{}",
            "(]",
            "([)]",
            "{[]}",
            "",
            "(",
            "(((((((((((",
            "([{}])",
            "()[{}]({[]})"
        };

        boolean[] expectedResults = {
            true,
            true,
            false,
            false,
            true,
            true,
            false,
            false,
            true,
            true
        };

        ValidParentheses sol = new ValidParentheses();

        for (int i = 0; i < testCases.length; i++) {
            boolean result = sol.validParentheses(testCases[i]);
            System.out.println("Input: \"" + testCases[i] + "\" Result: " + result
                + " Expected Result: " + expectedResults[i]);
        }
    }
}
