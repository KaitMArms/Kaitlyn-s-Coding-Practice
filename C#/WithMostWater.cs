/*Given n non-negative integers representing heights of vertical lines on the x-axis, 
find the max area of water given by two lines with the x-axis.
Assume area = min(h1,h2) x width, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴*/

using System.ComponentModel.DataAnnotations;

class WithMostWaterProblem
{
    public static void Run()
    {
        int[] heights1 = [1, 2, 3, 4, 5];
        int[] heights2 = [5, 4, 3, 2, 1];
        int[] heights3 = [3, 3, 3, 3];
        int[] heights4 = [0, 2, 0, 3];
        int[] heights5 = [1, 8, 6, 2, 5, 4, 8, 3, 7];

        Console.WriteLine($"Input: {heights1} Result: {WithMostWater(heights1)} Expected Result: 6");
        Console.WriteLine($"Input: {heights2} Result: {WithMostWater(heights2)} Expected Result: 6");
        Console.WriteLine($"Input: {heights3} Result: {WithMostWater(heights3)} Expected Result: 9");
        Console.WriteLine($"Input: {heights4} Result: {WithMostWater(heights4)} Expected Result: 4");
        Console.WriteLine($"Input: {heights5} Result: {WithMostWater(heights5)} Expected Result: 49");
    }

    static int WithMostWater(int[] arr)
    {
        int left = 0;
        int right = arr.Length - 1;
        int maxArea = 0;

        while(left < right)
        {
            int curArea = Math.Min(arr[left], arr[right]) * (right - left);
            if(curArea > maxArea){maxArea = curArea;}

            if(arr[left] < arr[right]){left++;}
            else{right--;}
        }
        return maxArea;
    }
}