/*Given a 2D grid of '1's (land) and '0's (water), find the max path better the islands
Only vertical and horizontal paths are valid & 1 signifies an island  & 0 signifies water
Depth First Search Strategy */ 
using System;
using System.Collections.Generic;
using System.Data;

class MaxIslandPathProblem
{
    static int rows;
    static int cols;
    static public void Run()
    {
        int[][] map =
        {
            new int[] {0, 1, 0, 0},
            new int[] {0, 1, 1, 0},
            new int[] {0, 0, 0, 0},
            new int[] {0, 0, 0, 1}
        };
        
        Console.WriteLine("Max Path: " + MaxIslandPath(map));
    }

    static public int DFS(int[][] map, int row, int col)
    {
        // In bounds & is island check
        if(row < 0 || row >= rows || col < 0 || col >= cols || map[row][col] != 1) {return 0;}
        
        // Mark current as visited & check neighbors
        map[row][col] = -1;
        int size = 1;
        int[] dirRows = {1, -1, 0, 0};
        int[] dirCols = {0, 0, 1, -1};
        for(int i = 0; i < 4; i++)
        {
            size += DFS(map, row + dirRows[i], col + dirCols[i]);
        }

        return size;
    }

    static public int MaxIslandPath(int[][] map)
    {
        if(map == null || map.Length == 0) {return 0;}
        rows = map.Length;
        cols = map[0].Length;
        int max = 0;

        for(int row = 0; row < rows; row++)
        {
            for(int col = 0; col < cols; col++)
            {
                if(map[row][col] == 1)
                {
                    int size = DFS(map, row, col);
                    max = Math.Max(max, size);
                }
            }
        }

        return max;
    }
}