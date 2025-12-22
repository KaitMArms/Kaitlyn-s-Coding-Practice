/* Return the k most frequent elements in an int array
Input: int[] nums & int k Output: int[]
*/

class TopKFreqElements {
    solution(nums, k) {
        const freqMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const heap = [];

        function heapPush(item) {
            heap.push(item);
            let i = heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);
                if (heap[p][0] <= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        }

        function heapPop() {
            if (heap.length === 1) return heap.pop();
            const top = heap[0];
            heap[0] = heap.pop();

            let i = 0;
            while (true) {
                let l = i * 2 + 1;
                let r = i * 2 + 2;
                let smallest = i;

                if (l < heap.length && heap[l][0] < heap[smallest][0]) {
                    smallest = l;
                }
                if (r < heap.length && heap[r][0] < heap[smallest][0]) {
                    smallest = r;
                }
                if (smallest === i) break;

                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
            return top;
        }

        for (const [num, freq] of freqMap.entries()) {
            heapPush([freq, num]);
            if (heap.length > k) {
                heapPop();
            }
        }

        const res = new Array(k);
        let index = 0;

        while (heap.length > 0) {
            res[index++] = heapPop()[1];
        }

        for (let i = 0, j = k - 1; i < j; i++, j--) {
            const tmp = res[i];
            res[i] = res[j];
            res[j] = tmp;
        }

        return res;
    }
}

(function main() {
    const testArrays = [
        [1, 1, 1, 2, 2, 3],
        [4, 4, 4, 6, 6, 7, 8, 8, 8, 8],
        [5, 5, 5, 5, 6, 6, 7],
        [1],
        [1, 2]
    ];

    const ks = [2, 3, 1, 1, 2];
    const solver = new TopKFreqElements();

    for (let i = 0; i < testArrays.length; i++) {
        const result = solver.solution(testArrays[i], ks[i]);
        console.log(`Test case ${i + 1}:`, result);
    }
})();