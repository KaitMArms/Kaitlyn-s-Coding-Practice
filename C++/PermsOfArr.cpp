/* Generate all permutations of a distinct int arr
Input: int[] Output: int[] perms Constraints: 1<= arr length <= 6
Backtracking method*/
#include <iostream>
#include <vector>
using namespace std;

void Backtrack(vector<int>& nums, vector<int>& used, vector<int>& path, vector<vector<int>>& res){
    if(path.size() == nums.size()){
        res.push_back(path);
        return;
    }

    for(int i = 0; i < nums.size(); i++){
        if(used[i] == 1) continue;

        used[i] = 1;
        path.push_back(nums[i]);
        Backtrack(nums, used, path, res);
        path.pop_back();
        used[i] = 0;
    }
}

vector<vector<int>> Permute(vector<int> nums){
    vector<vector<int>> res;
    vector<int> used(nums.size(), 0);
    vector<int> path;
    Backtrack(nums, used, path, res);
    return res;
}

int main() {
    vector<int> nums = {1, 2, 3};
    auto Perms = Permute(nums);

    cout << "Permutations:" << endl;
    for (auto& p : Perms) {
        for (int v : p) cout << v << " ";
        cout << endl;
    }
    // Expected count: 6
    return 0;
}