/* Return the k most frequent elements in an int array
Input: int[] nums & int k Output: int[]
*/
import java.util.*;

class TopKFreqElements {
    public static int[] solution(int[] nums, int k){
        int[] res = new int[k];
        int index = 0;
        Map<Integer, Integer> freqMap = new HashMap<>();
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(
            (a,b) -> freqMap.get(a) - freqMap.get(b)
        );
        
        for(int num: nums){
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        for(int num: freqMap.keySet()){
            minHeap.add(num);
            if(minHeap.size() > k){minHeap.poll();}
        }

        while(!minHeap.isEmpty()){
            res[index++] = minHeap.poll();
        }

        for(int i = 0, j = k - 1; i < j; i++, j--){
            int tmp = res[i];
            res[i] = res[j];
            res[j] = tmp;
        }

        return res;
    }

    public static void main(String[] args){
        int[][] testArrays = {
            {1, 1, 1, 2, 2, 3},
            {4, 4, 4, 6, 6, 7, 8, 8, 8, 8},
            {5, 5, 5, 5, 6, 6, 7},
            {1},
            {1, 2}
        };

        int[] ks = {2, 3, 1, 1, 2};

        for (int i = 0; i < testArrays.length; i++) {
            int[] result = solution(testArrays[i], ks[i]);
            System.out.println("Test case " + (i + 1) + ": " + Arrays.toString(result));
        }
    }
}
