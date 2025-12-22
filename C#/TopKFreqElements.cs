/* Return the k most frequent elements in an int array
Input: int[] nums & int k Output: int[]
*/
using System;
using System.Collections.Generic;
using System.Data;
using System.Numerics;
using System.Text;

class TopKFreqElementsProblem
{
    public static void Run()
    {
        int[][] testArrays = new int[][]
        {
            new int[] {1, 1, 1, 2, 2, 3},
            new int[] {4, 4, 4, 6, 6, 7, 8, 8, 8, 8},
            new int[] {5, 5, 5, 5, 6, 6, 7},
            new int[] {1},
            new int[] {1, 2}
        };

        int[] ks = {2, 3, 1, 1, 2};

        for (int i = 0; i < testArrays.Length; i++)
        {
            int[] result = TopKFreqElements(testArrays[i], ks[i]);
            Console.WriteLine($"Test case {i + 1}: {string.Join(", ", result)}");
        }
    }

    static int[] TopKFreqElements(int[] nums, int k)
    {
        int[] res = new int[k];
        int index = 0;
        Dictionary<int, int> freqMap = new Dictionary<int, int>();
        var minHeap = new PriorityQueue<int, int>();

        foreach(var num in nums)
        {
            freqMap[num] = freqMap.GetValueOrDefault(num, 0) + 1;
        }
        var sorted = new List<int>(freqMap.Keys);
        sorted.Sort((a, b) => freqMap[b].CompareTo(freqMap[a]));

        foreach(var num in freqMap)
        {
            minHeap.Enqueue(num.Key, num.Value);
            if(minHeap.Count > k){minHeap.Dequeue();}
        }
        
        while(minHeap.Count != 0)
        {
            res[index++] = minHeap.Dequeue();
        }

        for(int i = 0, j = k - 1; i < j; i++, j--)
        {
            int tmp = res[i];
            res[i] = res[j];
            res[j] = tmp;
        }
        return res;
    }
}