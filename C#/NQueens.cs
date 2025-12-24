// Place N queens on an N×N chessboard so no two queens attack each other. Return the number of possible solutions.
using System;
using System.Collections.Generic;

class NQueensProblems
{
    public static void Run()
    {
        int n = 8;
        Console.WriteLine($"Number of solutions for {n}-Queens: {NQueens(n)}");
    }

    public static int NQueens(int n)
    {
        HashSet<int> cols = new();
        HashSet<int> diag1 = new();
        HashSet<int> diag2 = new();
        int res = 0;
        
        void Recurs(int rows)
        {
            if (rows == n)
            {
                res++;
                return;
            }

            for(int i = 0; i < n; i++)
            {
                if(cols.Contains(i)) continue;
                if(diag1.Contains(rows - i)) continue;
                if(diag2.Contains(rows + i)) continue;
                
                // Place queen
                cols.Add(i);
                diag1.Add(rows - i);
                diag2.Add(rows + i);

                // Recurse & remove queen
                Recurs(rows++);
                cols.Remove(i);
                diag1.Remove(rows - i);
                diag2.Remove(rows + i);
            }
        }
        Recurs(0);
        return res;
    }

}
