// Place N queens on an N×N chessboard so no two queens attack each other. Return one possible solution.
import java.util.*;

class NQueens {
    HashSet<Integer> cols;
    HashSet<Integer> diag1;
    HashSet<Integer> diag2;
    int res;
    int n;

    public static void main(String[] args){
        NQueens sol = new NQueens();
        int n = 8;
        System.out.println("Number of solutions for " + n +"-Queens: " + sol.NQueens(n)  + " Number of solutions for " + n + "-Queens: " + sol.NQueens(n));
    }

    public int NQueens(int n){
        res = 0;
        cols = new HashSet<>();
        diag1 = new HashSet<>();
        diag2 = new HashSet<>();
        res = 0;

        Recurs(0);
        return res;
    }

    void Recurs(int rows){
        if(rows == n){
            res++;
            return;
        }

        for(int i = 0; i < n; i++){
            if(cols.contains(i)) continue;
            if(diag1.contains(rows - i)) continue;
            if(diag2.contains(rows + i)) continue;

            // Place queen
            cols.add(i);
            diag1.add(rows - i);
            diag2.add(rows + i);

            // Recurse & remove queen
            Recurs(rows + 1);
            cols.remove(i);
            diag1.remove(rows - i);
            diag2.remove(rows + i);
        }
    }
}
