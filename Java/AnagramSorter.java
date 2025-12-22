/* Given a list of words, group anagrams together
Input: str array Output: 2D str array
Constraints: 1 ≤ strs.length ≤ 10⁴, 1 ≤ strs[i].length ≤ 100, & strs[i] consists of lowercase letters
 */
import java.util.*;

class AnagramSorter {
    public List<List<String>> solution(String[] strs){
        Map<String, List<String>> map = new HashMap<>();

        for (String word : strs) {
            // Intilize needed vars & count letters of current word
            int[] count = new int[26];
            for(int i = 0; i < word.length(); i++){
                count[word.charAt(i) - 'a']++;
            }
            // Make Unique key based on prev counts, then add words to map
            StringBuilder sb = new StringBuilder();
            for(int i = 0; i < 26; i++){
                sb.append('#');
                sb.append(count[i]);
            }
            String key = sb.toString();
            if(!map.containsKey(key)){
                map.put(key, new ArrayList<>());
            }
            map.get(key).add(word);
        }

        // Map vals -> list of lists & return
        List<List<String>> groupings = new ArrayList<>();
        for(Map.Entry<String, List<String>> entry: map.entrySet()){
            groupings.add(entry.getValue());
        }
        return groupings;
    }

    public static void main(String[] args) {
        String[] input = {"eat", "tea", "tan", "ate", "nat", "bat"};

        AnagramSorter sorter = new AnagramSorter();
        List<List<String>> result = sorter.solution(input);

        System.out.println("Grouped Anagrams:");
        for (int i = 0; i < result.size(); i++) {
            System.out.println(result.get(i));
        }
    }
}
