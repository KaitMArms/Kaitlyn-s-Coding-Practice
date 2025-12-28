/* Generate all permutations of a distinct int arr
Input: int[] Output: int[] perms Constraints: 1<= arr length <= 6
Backtracking Method*/
using System;
using System.Collections.Generic;

class PermsOfArrProblem
{

    static void Backtrack(int[] nums, int[] used, List<int> path, List<List<int>> res)
    {
        if(path.Count == nums.Length)
        {
            res.Add(new List<int>(path));
            return;
        }

        for(int i = 0; i < nums.Length; i++)
        {
            if(used[i] == 1) continue;

            used[i] = 1;
            path.Add(nums[i]);
            Backtrack(nums, used, path, res);
            path.RemoveAt(path.Count - 1);
            used[i] = 0;
        }
    }
    
    static List<List<int>> Permute(int[] nums)
    {
        var res = new List<List<int>>();
        Backtrack(nums, new int[nums.Length], new List<int>(), res);
        return res;
    }

    static public void Run() {
        int[] nums = {1, 2, 3};
        var perms = Permute(nums);

        Console.WriteLine("Permutations:");
        foreach (var p in perms) {
            Console.WriteLine(string.Join(",", p));
        }
        // Expected count: 6
    }
}