/*Given n non-negative integers representing heights of vertical lines on the x-axis, 
find the max area of water given by two lines with the x-axis.
Assume area = min(h1,h2) x width, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴*/
#include <iostream>
#include <vector>
using namespace std;

class Solution{
public:
    int MostWater(std::vector<int>& arr){
        int left = 0;
        int right = arr.size() - 1;
        int maxArea;

        while(left < right){
            int curArea = min(arr[left], arr[right]) * (right - left);
            if(curArea > maxArea){maxArea = curArea;}

            if(arr[left] < arr[right]){left++;}
            else{right--;}
        }
        return maxArea;
    }
};

int main() {
    Solution sol;

    // Test Cases
    std:: vector<int> heights1 = {1, 2, 3, 4, 5};
    std:: vector<int> heights2 = {5, 4, 3, 2, 1};
    std:: vector<int> heights3 = {3, 3, 3, 3};
    std:: vector<int> heights4 = {0, 2, 0, 3};
    std:: vector<int> heights5 = {1, 8, 6, 2, 5, 4, 8, 3, 7};

    cout << "Input: {1, 2, 3, 4, 5}" << " -> " << sol.MostWater(heights1) << " Expected Solution: 6" << endl;
    cout << "Input: {5, 4, 3, 2, 1}" << " -> " << sol.MostWater(heights2) << " Expected Solution: 6" << endl;
    cout << "Input: {3, 3, 3, 3}" << " -> " << sol.MostWater(heights3) << " Expected Solution: 9" << endl;
    cout << "Input: {0, 2, 0, 3}" << " -> " << sol.MostWater(heights4) << " Expected Solution: 4" << endl;
    cout << "Input: {1, 8, 6, 2, 5, 4, 8, 3, 7}" << " -> " << sol.MostWater(heights5) << " Expected Solution: 49" << endl;

    return 0;
}