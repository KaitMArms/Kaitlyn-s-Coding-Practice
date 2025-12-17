/* You are given a 2d array that represents a chess board with rooks. T
he rooks are denoted by 1s and empty spaces denoted by 0 You need to see if any rooks can attack eachother. 
If yes return false, if no return true */
using System.Collections.Generic;

class RooksProblem
{
    public static void Run()
    {
        int[][] a =
        {
            new int[] {0, 1, 0, 0},
            new int[] {0, 1, 1, 0},
            new int[] {0, 0, 0, 0},
            new int[] {0, 0, 0, 1}
        };

        Console.WriteLine(RooksAreSafe(a) ? "All rooks are safe." : "One or more rooks can attack each other.");
    }

    public static bool RooksAreSafe(int[][] a)
    {
        HashSet<int> seenRows = new();
        HashSet<int> seenCols = new();

        for (int i = 0; i < a.Length; i++)
        {
            for (int j = 0; j < a[i].Length; j++)
            {
                if (a[i][j] == 1)
                {
                    if (seenRows.Contains(i) || seenCols.Contains(j))
                        return false;

                    seenRows.Add(i);
                    seenCols.Add(j);
                }
            }
        }
        return true;
    }
}