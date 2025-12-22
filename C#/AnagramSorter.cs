/* Given a list of words, group anagrams together
Input: str array Output: 2D str array
Constraints: 1 ≤ strs.length ≤ 10⁴, 1 ≤ strs[i].length ≤ 100, & strs[i] consists of lowercase letters
 */
using System;
using System.Collections.Generic;
using System.Text;

class AnagramSorterProblem
{
    public static void Run()
    {
         string[] input = { "eat", "tea", "tan", "ate", "nat", "bat" };
        List<List<string>> result = AnagramSorter(input);

        Console.WriteLine("Grouped Anagrams:");
        for (int i = 0; i < result.Count; i++)
        {
            Console.WriteLine(string.Join(", ", result[i]));
        }
    }
    static List<List<string>> AnagramSorter(string[] strs)
    {
        // For comments see java file
        Dictionary<string, List<string>> map = new Dictionary<string, List<string>>();
        for(int i = 0; i < strs.Length; i++)
        {
            string word = strs[i];
            int[] count = new int[26];

            for(int j = 0; j < word.Length; j++)
            {
                count[word[j] - 'a']++;
            }

            StringBuilder sb = new StringBuilder();
            for(int j = 0; j < 26; j++)
            {
                sb.Append('#');
                sb.Append(count[j]);
            }

            string key = sb.ToString();
            if (!map.ContainsKey(key))
            {
                map[key] = new List<string>();
            }
            map[key].Add(word);
        }

        List<List<string>> groupings = new List<List<string>>();
        foreach(var entry in map)
        {
            groupings.Add(entry.Value);   
        }
        return groupings;
    }
}