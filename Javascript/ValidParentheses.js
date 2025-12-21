/*Determine if a string containing only ()[]{} is valid. To be valid each open must have a closing
Input: string Output: boolean
Constaints: 1 ≤ s.length ≤ 10⁴ && Only characters ()[]{}*/

class ValidParentheses{
    solution(s) {
        const openSet = new Set(['(', '[', '{']);
        const closedSet = new Set([')', ']', '}']);
        const mapping = {
            ')':'(',
            ']':'[',
            '}':'{'
        };
        const openChars = [];

        for(let i = 0; i < s.length; i++){
            let c = s[i];

            if(openSet.has(c)){
                openChars.push(c);
            }
            else if(closedSet.has(c)){
                if(openChars.length === 0 || openChars[openChars.length - 1] !== mapping[c]) {return false}
                openChars.pop();
            }
            else{
                return false;
            }
        }
        return openChars.length === 0;
    }
}

(function main(){
    const testCases = [
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
    ];
    const expectedResults = [
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
    ];

    const vp = new ValidParentheses();

    for (let i = 0; i < testCases.length; i++) {
        const result = vp.solution(testCases[i]);
        console.log(`Input: "${testCases[i]}" Result: ${result} Expected Result: ${expectedResults[i]}`);
    }
})();