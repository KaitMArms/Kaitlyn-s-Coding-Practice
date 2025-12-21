/*Determine if a string containing only ()[]{} is valid. To be valid each open must have a closing
Input: string Output: boolean
Constaints: 1 ≤ s.length ≤ 10⁴ && Only characters ()[]{}*/
#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include <unordered_map>
#include <stack>

using namespace std;

class Solution {
public:
    bool ValidParentheses(string s){
        std:: unordered_set<char> openSet = {'(', '[', '{'};
        std:: unordered_set<char> closedSet = {')', ']', '}'};
        std:: unordered_map<char, char> mapping =  {
            {')', '('}, 
            {']', '['},
            {'}', '{'}
        };
        std:: stack<char> openChars;

        for(int i = 0; i < s.length(); i++){
            char c = s[i];

            if(openSet.find(c) != openSet.end()){
                openChars.push(c);
            }
            else if(closedSet.find(c) != closedSet.end()){
                if(openChars.empty()) {return false;}
                if (openChars.top() != mapping[c]) {return false;}
                openChars.pop();

            }
            else{return false;}
        }
        return openChars.empty();
    }
};

int main()
{

    std::vector<string> testCases = {
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
    std::vector<bool> expectedResults = {
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

    Solution sol;

    for (size_t i = 0; i < testCases.size(); i++)
    {
        cout << "Input: \"" << testCases[i] << "\" " << "Result: " << (sol.ValidParentheses(testCases[i]) ? "true" : "false") << " " << "Expected Result: " << (expectedResults[i] ? "true" : "false") << endl;
    }

    return 0;
};