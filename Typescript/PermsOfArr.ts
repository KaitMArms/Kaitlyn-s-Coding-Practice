/* Generate all permutations of a distinct int arr
Input: int[] Output: int[] perms Constraints: 1<= arr length <= 6
Backtracking Method*/

function PermuteTS(nums: number[]): number[][] {
    const res: number[][] = [];
    const used: boolean[] = Array(nums.length).fill(false);

    function Backtrack(path: number[]) {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i]);
            Backtrack(path);
            path.pop();
            used[i] = false;
        }
    }

    Backtrack([]);
    return res;
}

(function main() {
    const nums = [1, 2, 3];
    const perms = PermuteTS(nums);

    console.log("Permutations:");
    perms.forEach(p => console.log(p));
    // Expected count: 6
})();
