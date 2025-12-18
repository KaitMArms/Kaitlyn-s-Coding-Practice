/*Given n non-negative integers representing heights of vertical lines on the x-axis, 
find the max area of water given by two lines with the x-axis.
Assume area = min(h1,h2) x width, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴*/
import java.util.*;

class WithMostWater{

    public static int withMostWater(int[] arr){
        int left = 0;
        int right = arr.length -1;
        int maxArea = 0;

        while(left < right){
            int curArea = Math.min(arr[left], arr[right]) * (right - left);
            if(curArea > maxArea){maxArea = curArea;}

            if(arr[left] < arr[right]){left++;}
            else{right--;}
        }
        return maxArea;
    }

    public static void main(String[] args){
        int[] heights1 = {1, 2, 3, 4, 5};
        int[] heights2 = {5, 4, 3, 2, 1};
        int[] heights3 = {3, 3, 3, 3};
        int[] heights4 = {0, 2, 0, 3};
        int[] heights5 = {1, 8, 6, 2, 5, 4, 8, 3, 7};

        System.out.println("Input: " + Arrays.toString(heights1) + " Result: " + withMostWater(heights1) + " Expected Result: 6");
        System.out.println("Input: " + Arrays.toString(heights2) + " Result: " + withMostWater(heights2) + " Expected Result: 6");
        System.out.println("Input: " + Arrays.toString(heights3) + " Result: " + withMostWater(heights3) + " Expected Result: 9");
        System.out.println("Input: " + Arrays.toString(heights4) + " Result: " + withMostWater(heights4) + " Expected Result: 4");
        System.out.println("Input: " + Arrays.toString(heights5) + " Result: " + withMostWater(heights5) + " Expected Result: 49");
    }
}
