# Given a list of words, group anagrams together
# Input: str array Output: 2D str array
# Constraints: 1 ≤ strs.length ≤ 10⁴, 1 ≤ strs[i].length ≤ 100, & strs[i] consists of lowercase letters
from typing import List

class AnagramSorter:
    def solution(self, strs: List[str]) -> List[List[str]]:
        groups = {}

        for i in range(len(strs)):
            word = strs[i]
            count = [0] * 26
            
            for j in range(len(word)):
                count[ord(word[j]) - ord('a')] += 1
            
            keyParts = []
            for j in range(26):
                keyParts.append('#')
                keyParts.append(str(count[j]))
            key = ''.join(keyParts)

            if key not in groups:
                groups[key] = []
            groups[key].append(word)

        result = []
        for value in groups.values():
            result.append(value)
        return result

def main():
    input_words = ["eat", "tea", "tan", "ate", "nat", "bat"]

    sorter = AnagramSorter()
    grouped = sorter.solution(input_words)

    print("Grouped Anagrams:")
    for group in grouped:
        print(group)

if __name__ == "__main__":
    main()