# Determine if a string containing only ()[]{} is valid. To be valid each open must have a closing
# Input: string Output: boolean
# Constaints: 1 ≤ s.length ≤ 10⁴ && Only characters ()[]{}

def ValidParentheses(s):
    openSet = {'(', '[', '{'}
    closedSet = {')', ']', '}'}
    mapping = {')': '(', ']': '[', '}': '{'}
    openChars = []

    for c in s:
        if c in openSet:
            openChars.append(c)
        elif c in closedSet:
            if not openChars or openChars[-1] != mapping.get(c):
                return False
            openChars.pop()
    return len(openChars) == 0
    
def main():
    test_cases = [
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
    ]

    expected_results = [
        True,
        True,
        False,
        False,
        True,
        True,
        False,
        False,
        True,
        True
    ]

    for i, test in enumerate(test_cases):
        result = ValidParentheses(test)
        print(f'Input: "{test}" Result: {result} Expected Result: {expected_results[i]}')

if __name__ == "__main__":
    main()