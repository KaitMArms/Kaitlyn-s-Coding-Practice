/*Rotate an array to the right by k steps, where k is non-negative
Expected input is nums array and int k & expected out is nums array
Constraints: 1 ≤ nums.length ≤ 10⁵ & -10⁹ ≤ nums[i] ≤ 10⁹*/

class RotateArrProblem{
    public static void Run(){
        // Test Cases
        int[] test1Arr = { 1, 2, 3, 4, 5, 6, 7 };
        int test1Int = 3;
        int[] test2Arr = { 1, 2, 3 };
        int test2Int = 0;
        int[] test3Arr = { 10, 20, 30 };
        int test3Int = 1;
        int[] test4Arr = { 1, 2, 3, 4 };
        int test4Int = 4;
        int[] test5Arr = { 1, 2, 3, 4 };
        int test5Int = 6;
        int[] test6Arr = { 42 };
        int test6Int = 10;
        int[] test7Arr = { 1, 2 };
        int test7Int = 1;
        int[] test8Arr = { -1, -100, 3, 99 };
        int test8Int = 2;
        int[] test9Arr = { 1000000000, -1000000000 };
        int test9Int = 1;
        int[] test10Arr = { 7, 7, 7, 7 };
        int test10Int = 3;

        // Outputs
        Console.Write("Input: "); PrintArray(test1Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test1Arr, test1Int));
        Console.WriteLine(" Expected: [5, 6, 7, 1, 2, 3, 4]");
        Console.Write("Input: "); PrintArray(test2Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test2Arr, test2Int));
        Console.WriteLine(" Expected: [1, 2, 3]");
        Console.Write("Input: "); PrintArray(test3Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test3Arr, test3Int));
        Console.WriteLine(" Expected: [30, 10, 20]");
        Console.Write("Input: "); PrintArray(test4Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test4Arr, test4Int));
        Console.WriteLine(" Expected: [1, 2, 3, 4]");
        Console.Write("Input: "); PrintArray(test5Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test5Arr, test5Int));
        Console.WriteLine(" Expected: [3, 4, 1, 2]");
        Console.Write("Input: "); PrintArray(test6Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test6Arr, test6Int));
        Console.WriteLine(" Expected: [42]");
        Console.Write("Input: "); PrintArray(test7Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test7Arr, test7Int));
        Console.WriteLine(" Expected: [2, 1]");
        Console.Write("Input: "); PrintArray(test8Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test8Arr, test8Int));
        Console.WriteLine(" Expected: [3, 99, -1, -100]");
        Console.Write("Input: "); PrintArray(test9Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test9Arr, test9Int));
        Console.WriteLine(" Expected: [-1000000000, 1000000000]");
        Console.Write("Input: "); PrintArray(test10Arr);
        Console.Write(" -> "); PrintArray(rotateArr(test10Arr, test10Int));
        Console.WriteLine(" Expected: [7, 7, 7, 7]");
    }

    static void PrintArray(int[] arr)
    {
        Console.Write("[");
        for (int i = 0; i < arr.Length; i++)
        {
            Console.Write(arr[i]);
            if (i < arr.Length - 1)
                Console.Write(", ");
        }
        Console.Write("]");
    }

    public static int[] rotateArr(int[] arr, int k){
        int arrSize = arr.Length;
        if(k == arrSize || k % arrSize == 0) {return arr;}
        else if(k > arrSize){k = k % arrSize;}

        reverse(arr, 0, arrSize - k - 1);
        reverse(arr, arrSize - k, arrSize - 1);
        reverse(arr, 0, arrSize - 1);
        return arr;
    }

    static void reverse(int[] arr, int start, int end){
        while(start < end)
        {
            int tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    }
}