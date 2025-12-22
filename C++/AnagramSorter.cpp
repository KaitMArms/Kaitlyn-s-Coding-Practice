/* Given a list of words, group anagrams together
Input: str array Output: 2D str array
Constraints: 1 ≤ strs.length ≤ 10⁴, 1 ≤ strs[i].length ≤ 100, & strs[i] consists of lowercase letters
 */
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

class AnagramSorter {
public:
    std::vector<std:: vector<string>> solution(std::vector<string>& strs){
        unordered_map<string, std:: vector<string>> map;

        for(int i = 0; i < strs.size(); i++){
            string word = strs[i];
            int count[26] = {0};

            for(int j = 0; j < strs.size(); j++){
                count[word[j] - 'a']++;
            }

            string key;
            for(int j = 0; j < 26; j++){
                key += "#";
                key += to_string(count[j]);
            }
            map[key].push_back(word);
        }

        std:: vector<vector<string>> groupings;
        for(auto& entry: map){
            groupings.push_back(entry.second);
        }
        return groupings;
    }
};

int main() {
    vector<string> input = {"eat", "tea", "tan", "ate", "nat", "bat"};

    AnagramSorter sorter;
    vector<vector<string>> result = sorter.solution(input);

    cout << "Grouped Anagrams:\n";
    for (int i = 0; i < result.size(); i++) {
        for (int j = 0; j < result[i].size(); j++) {
            cout << result[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}