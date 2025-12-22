/* Return the k most frequent elements in an int array
Input: int[] nums & int k Output: int[]
*/
#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;

class TopKFreqElements{
public:
    std:: vector<int> solution(vector<int> nums, int k){
        std:: vector<int> res(k);
        int index = 0;
        std:: unordered_map<int, int> freqMap;
        priority_queue<
            pair<int, int>,
            vector<pair<int, int>>,
            greater<pair<int, int>>
        > minHeap;
        

        for(int num: nums){
            freqMap[num]++;
        }

        for(const auto& p : freqMap){
            minHeap.push({p.second, p.first});
            if (minHeap.size() > k) {
                minHeap.pop();
            } 
        }

        while(!minHeap.empty()){
            res[index++] = minHeap.top().second;
            minHeap.pop();
        }

        for(int i = 0, j = k - 1; i < j; i++, j--){
            int tmp = res[i];
            res[i] = res[j];
            res[j] = tmp;
        }

        return res;
    }
};

int main() {
        vector<vector<int>> testArrays = {
            {1, 1, 1, 2, 2, 3},
            {4, 4, 4, 6, 6, 7, 8, 8, 8, 8},
            {5, 5, 5, 5, 6, 6, 7},
            {1},
            {1, 2}
        };

        vector<int> ks = {2, 3, 1, 1, 2};
        TopKFreqElements freq;

        for (size_t i = 0; i < testArrays.size(); i++) {
            vector<int> result = freq.solution(testArrays[i], ks[i]);

            cout << "Test case " << i + 1 << ": ";
            for (int num : result) {
                cout << num << " ";
            }
            cout << endl;
        }

        return 0;
    }
