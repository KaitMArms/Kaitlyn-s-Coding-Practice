/*Given a 2D grid of '1's (land) and '0's (water), find the max path better the islands
Only vertical and horizontal paths are valid & 1 signifies an island  & 0 signifies water
Depth First Search Strategy*/
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution{
public:
    int rows;
    int cols;

    int DFS(std:: vector<vector<int>> map, int row, int col){

        // In bounds & is island check
        if(row < 0 || row >= rows || col < 0 || col >= cols || map[row][col] != 1) {return 0;}

        // Mark current as visited & check neighbors
        map[row][col] = -1;
        int size = 1;
        std:: vector<int> dirRows = {1, -1, 0, 0};
        std:: vector<int> dirCols = {0, 0, 1, -1};
        for(int i = 0; i < 4; i++){
            size += DFS(map, row + dirRows[i], col + dirCols[i]);
        }

        return size;
    }

    int MaxIslandPath(std:: vector<vector<int>> map){
        if(map.empty() || map.size() == 0) {return 0;}
        rows = map.size();
        cols = map[0].size();
        int maxSize = 0;

        for(int row = 0; row < rows; row++){
            for(int col = 0; col < cols; col++){
                if(map[row][col] == 1){
                    int size = DFS(map, row, col);
                    maxSize = std::max(maxSize, size);
                }
            }
        }

        return maxSize;
    }

};

int main(){
    Solution sol;
    std:: vector<vector<int>> map = {
        {0, 1, 0, 0},
        {0, 1, 1, 0},
        {0, 0, 0, 0},
        {0, 0, 0, 1}
    };
    std:: cout << "Max Path: " << sol.MaxIslandPath(map) << std:: endl;
}
