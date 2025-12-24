// Place N queens on an N×N chessboard so no two queens attack each other. Return one possible solution.
#include <iostream>
#include <unordered_set>
#include <vector>
using namespace std;

class Solution{
public:
    std::unordered_set<int> cols;
    std::unordered_set<int> diag1;
    std::unordered_set<int> diag2;
    int res;
    int n;

    int NQueens(int n){
        this->n = n;
        res = 0;

        // Reset
        cols.clear();
        diag1.clear();
        diag2.clear();
        
        Recurs(0);
        return res;
    }

    void Recurs(int rows){
        if(rows == n){
            res++;
            return;
        }

        for(int i = 0; i < n; i++){
            if(cols.find(i) != cols.end()) continue;
            if(diag1.find(rows - i) != diag1.end()) continue;
            if(diag2.find(rows + i) != diag2.end()) continue;

            // Place queen
            cols.insert(i);
            diag1.insert(rows - i);
            diag2.insert(rows + i);

            // Recurse & remove queen
            Recurs(rows++);
            cols.erase(i);
            diag1.erase(rows - i);
            diag2.erase(rows + i);
        }
    }
};

int main(){
    Solution sol;
    int n = 8;
    std::cout <<"Number of solutions for " << n << " -Queens: " << sol.NQueens(n) << std::endl;
}