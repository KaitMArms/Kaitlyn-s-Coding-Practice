/*Rotate an array to the right by k steps, where k is non-negative
Expected input is nums array and int k & expected out is nums array
Constraints: 1 ≤ nums.length ≤ 10⁵ & -10⁹ ≤ nums[i] ≤ 10⁹*/
#include <iostream>
#include <vector>

using namespace std;

class Solution{
    public:
        std:: vector<int> RotateArr(vector<int> arr, int k){
            int arrSize = arr.size();
            if(k == arrSize || k % arrSize == 0) return arr;
            else if(k > arrSize) k = k % arrSize;

            reverse(arr, 0, arrSize - k - 1);
            reverse(arr, arrSize - k, arrSize - 1);
            reverse(arr, 0, arrSize - 1);

            return arr;
        }

        void reverse(vector<int>& arr, int start, int end){
            while(start < end){
                int tmp = arr[start];
                arr[start] = arr[end];
                arr[end] = tmp;
                start++;
                end--;
            }
        }
};

void printVector(const vector<int>& v){
    cout << "[";
    for (size_t i = 0; i < v.size(); i++){
        cout << v[i];
        if (i != v.size() - 1) cout << ", ";
    }
    cout << "]";
}

int main(){
    Solution sol;

    // Tests
    vector<int> test1Arr = {1,2,3,4,5,6,7};
    int test1Int = 3;
    vector<int> test2Arr = {1,2,3};
    int test2Int = 0;
    vector<int> test3Arr = {10,20,30};
    int test3Int = 1;
    vector<int> test4Arr = {1,2,3,4};
    int test4Int = 4;
    vector<int> test5Arr = {1,2,3,4};
    int test5Int = 6;
    vector<int> test6Arr = {42};
    int test6Int = 10;
    vector<int> test7Arr = {1,2};
    int test7Int = 1;
    vector<int> test8Arr = {-1,-100,3,99};
    int test8Int = 2;
    vector<int> test9Arr = {1000000000, -1000000000};
    int test9Int = 1;
    vector<int> test10Arr = {7,7,7,7};
    int test10Int = 3;

    // Output
    cout << "Input: "; printVector(test1Arr); cout << " -> "; printVector(sol.RotateArr(test1Arr, test1Int)); cout << " Expected: [5, 6, 7, 1, 2, 3, 4]" << endl;
    cout << "Input: "; printVector(test2Arr); cout << " -> "; printVector(sol.RotateArr(test2Arr, test2Int)); cout << " Expected: [1, 2, 3]" << endl;
    cout << "Input: "; printVector(test3Arr); cout << " -> "; printVector(sol.RotateArr(test3Arr, test3Int)); cout << " Expected: [30, 10, 20]" << endl;
    cout << "Input: "; printVector(test4Arr); cout << " -> "; printVector(sol.RotateArr(test4Arr, test4Int)); cout << " Expected: [1, 2, 3, 4]" << endl;
    cout << "Input: "; printVector(test5Arr); cout << " -> "; printVector(sol.RotateArr(test5Arr, test5Int)); cout << " Expected: [3, 4, 1, 2]" << endl;
    cout << "Input: "; printVector(test6Arr); cout << " -> "; printVector(sol.RotateArr(test6Arr, test6Int)); cout << " Expected: [42]" << endl;
    cout << "Input: "; printVector(test7Arr); cout << " -> "; printVector(sol.RotateArr(test7Arr, test7Int)); cout << " Expected: [2, 1]" << endl;
    cout << "Input: "; printVector(test8Arr); cout << " -> "; printVector(sol.RotateArr(test8Arr, test8Int)); cout << " Expected: [3, 99, -1, -100]" << endl;
    cout << "Input: "; printVector(test9Arr); cout << " -> "; printVector(sol.RotateArr(test9Arr, test9Int)); cout << " Expected: [-1000000000, 1000000000]" << endl;
    cout << "Input: "; printVector(test10Arr); cout << " -> "; printVector(sol.RotateArr(test10Arr, test10Int)); cout << " Expected: [7, 7, 7, 7]" << endl;

    return 0;

}