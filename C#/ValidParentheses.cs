/*Determine if a string containing only ()[]{} is valid. To be valid each open must have a closing
Input: string Output: boolean
Constaints: 1 ≤ s.length ≤ 10⁴ && Only characters ()[]{}*/

class ValidParenthesesProblem
{
    public static void Run()
    {
        string[] testCases = {
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

        bool[] expectedResults = {
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

        for (int i = 0; i < testCases.Length; i++)
        {
            string input = testCases[i];
            bool result = ValidParenrtheses(input);
            Console.WriteLine($"Input: \"{input}\" Result: {result} Expected Result: {expectedResults[i]}");
        }
    }

    static bool ValidParenrtheses(string s)
    {
        HashSet<char> openSet = new HashSet<char>
        {
            '(',
            '[',
            '{'
        };
        HashSet<char> closedSet = new HashSet<char>
        {
            ')',
            ']',
            '}'
        };
        Dictionary<char, char> mapping = new Dictionary<char, char>
        {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };
        Queue<char> openChars = new Queue<char>();

        for (int i = 0; i < s.Length; i++)
        {
            char c = s[i];

            if (openSet.Contains(c))
            {
                // push opening bracket
                openChars.Enqueue(c);
            }
            else if (closedSet.Contains(c))
            {
                // if no unmatched opening -> invalid
                if (openChars.Count == 0) return false;

                // simulate stack: check last unmatched opening
                char[] arr = openChars.ToArray();
                char lastOpen = arr[arr.Length - 1];

                if (mapping[c] != lastOpen) return false;

                // remove last opening from queue
                Queue<char> newQueue = new Queue<char>();
                for (int j = 0; j < arr.Length - 1; j++)
                    newQueue.Enqueue(arr[j]);
                openChars = newQueue;
            }
            else
            {
                return false; // invalid character
            }
        }

        while(openChars.Count != 0)
        {
            // if any unmatched openings remain -> invalid
            return false;
        }

        return true;

    }
}
