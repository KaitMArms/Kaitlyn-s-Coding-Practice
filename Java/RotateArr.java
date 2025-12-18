/*Rotate an array to the right by k steps, where k is non-negative
Expected input is nums array and int k & expected out is nums array
Constraints: 1 ≤ nums.length ≤ 10⁵ & -10⁹ ≤ nums[i] ≤ 10⁹*/

import java.util.Arrays;

class RotateArr {
    public int[] rotateArr(int[] arr, int k){
        int arrSize = arr.length;
        if(k == arrSize || k % arrSize == 0){return arr;}
        else if (k > arrSize) {k = k % arrSize;}

        reverse(arr, 0, arrSize - k - 1);
        reverse(arr, arrSize - k, arrSize - 1);
        reverse(arr, 0, arrSize - 1);

        return arr;
    }

    public void reverse(int[] arr, int start, int end){
        while(start < end){
            int tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    }

    public static void main(String[] args){
        RotateArr solver = new RotateArr(); // ← the only required fix

        int[][] testArrays = {
            {1, 2, 3, 4, 5, 6, 7},
            {1, 2, 3},
            {10, 20, 30},
            {1, 2, 3, 4},
            {1, 2, 3, 4},
            {42},
            {1, 2},
            {-1, -100, 3, 99},
            {1000000000, -1000000000},
            {7, 7, 7, 7}
        };

        int[] kValues = {3, 0, 1, 4, 6, 10, 1, 2, 1, 3};

        String[] expectedResults = {
            "[5, 6, 7, 1, 2, 3, 4]",
            "[1, 2, 3]",
            "[30, 10, 20]",
            "[1, 2, 3, 4]",
            "[3, 4, 1, 2]",
            "[42]",
            "[2, 1]",
            "[3, 99, -1, -100]",
            "[-1000000000, 1000000000]",
            "[7, 7, 7, 7]"
        };

        for (int i = 0; i < testArrays.length; i++) {
            int[] input = testArrays[i];

            // call instance method via object
            int[] result = solver.rotateArr(input.clone(), kValues[i]);

            System.out.println(
                "Input: " + Arrays.toString(input) +
                " Result: " + Arrays.toString(result) +
                " Expected Result: " + expectedResults[i]
            );
        }
    }
}
