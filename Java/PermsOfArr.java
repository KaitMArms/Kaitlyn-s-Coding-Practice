/* Generate all permutations of a distinct int arr
Input: int[] Output: int[] perms Constraints: 1<= arr length <= 6
*/
import java.util.*;

public class PermsOfArr {
    
    static void Backtrack(int[] nums, int[] used, List<Integer> path, List<List<Integer>> res) {
        if (path.size() == nums.length) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (used[i] == 1) continue;

            used[i] = 1;
            path.add(nums[i]);
            Backtrack(nums, used, path, res);
            path.remove(path.size() - 1);
            used[i] = 0;
        }
    }

    static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        Backtrack(nums, new int[nums.length], new ArrayList<>(), res);
        return res;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        List<List<Integer>> perms = permute(nums);

        System.out.println("Permutations:");
        for (List<Integer> p : perms) {
            System.out.println(p);
        }
        // Expected count: 6
    }
}
