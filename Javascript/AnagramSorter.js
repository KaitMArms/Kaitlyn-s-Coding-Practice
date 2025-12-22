/* Given a list of words, group anagrams together
Input: str array Output: 2D str array
Constraints: 1 ≤ strs.length ≤ 10⁴, 1 ≤ strs[i].length ≤ 100, & strs[i] consists of lowercase letters
 */

class AnagramSorter {
    solution(strs) {
        const map = new Map();

        for (let i = 0; i < strs.length; i++) {
            const word = strs[i];
            const count = new Array(26).fill(0);

            for (let j = 0; j < word.length; j++) {
                count[word.charCodeAt(j) - 97]++;
            }

            let key = "";
            for (let j = 0; j < 26; j++) {
                key += "#" + count[j];
            }

            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(word);
        }

        const result = [];
        for (const value of map.values()) {
            result.push(value);
        }

        return result;
    }
}

(function main(){
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const sorter = new AnagramSorter();
    const grouped = sorter.solution(input);

    console.log("Grouped Anagrams:");
    for (const group of grouped) {
        console.log(group);
    }
})();