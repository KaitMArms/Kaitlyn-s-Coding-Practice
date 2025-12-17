/* You are given a 2d array that represents a chess board with rooks. T
he rooks are denoted by 1s and empty spaces denoted by 0 You need to see if any rooks can attack eachother. 
If yes return false, if no return true */
#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

class Solution{
public:
    bool RooksAreSafe(std::vector<std::vector<int>>& a){
        std::unordered_set<int> seenRows;
        std::unordered_set<int> seenCols;

        for(int i = 0; i < a.size(); i++){
            for(int j = 0; j < a.size(); j++){
                if(a[i][j] == 1){
                    if(seenRows.find(i) != seenRows.end() || seenCols.find(j) != seenCols.end()) {return false;}
                    seenRows.insert(i);
                    seenCols.insert(j);
                }
            }
        }
        return true;
    }

};

int main(){
    Solution sol;
    std::vector<std::vector<int>> a ={
        {0, 1, 0, 0},
        {0, 1, 1, 0},
        {0, 0, 0, 0},
        {0, 0, 0, 1}
    };

    if(sol.RooksAreSafe(a)){
        std::cout << "All rooks are safe." << std::endl;
    } else{
        std::cout << "One or more rooks can attack each other." << std::endl;
    }

};