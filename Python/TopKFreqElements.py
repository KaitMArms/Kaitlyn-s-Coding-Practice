# Return the k most frequent elements in an int array
# Input: int[] nums & int k Output: int[]
import heapq
from collections import Counter
from typing import List, Tuple

class TopKFreqElements:
    def solution(self, nums: List[int], k: int) -> List[int]:
        freq_map = Counter(nums)

        heap: List[Tuple[int, int]] = []

        for num, freq in freq_map.items():
            heapq.heappush(heap, (freq, num))
            if len(heap) > k:
                heapq.heappop(heap)

        res: List[int] = [0] * k
        index = 0
        while heap:
            res[index] = heapq.heappop(heap)[1]
            index += 1

        res.reverse()
        return res

def main():
    test_arrays = [
        [1, 1, 1, 2, 2, 3],
        [4, 4, 4, 6, 6, 7, 8, 8, 8, 8],
        [5, 5, 5, 5, 6, 6, 7],
        [1],
        [1, 2]
    ]

    ks = [2, 3, 1, 1, 2]
    solver = TopKFreqElements()

    for i, arr in enumerate(test_arrays, 1):
        result = solver.solution(arr, ks[i-1])
        print(f"Test case {i}: {result}")

if __name__ == "__main__":
    main()