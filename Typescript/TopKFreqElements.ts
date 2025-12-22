/* Return the k most frequent elements in an int array
Input: int[] nums & int k Output: int[]
*/

class TopKFreqElementsTS {
    private heap: [number, number][] = []; 

    private heapPush(item: [number, number]): void {
        this.heap.push(item);
        let i = this.heap.length - 1;

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p][0] <= this.heap[i][0]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    private heapPop(): [number, number] | undefined {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;

        let i = 0;
        while (true) {
            let l = i * 2 + 1;
            let r = i * 2 + 2;
            let smallest = i;

            if (l < this.heap.length && this.heap[l][0] < this.heap[smallest][0]) {
                smallest = l;
            }
            if (r < this.heap.length && this.heap[r][0] < this.heap[smallest][0]) {
                smallest = r;
            }
            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
        return top;
    }

    solution(nums: number[], k: number): number[] {
        const freqMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
        }

        this.heap = []; 

        for (const [num, freq] of freqMap.entries()) {
            this.heapPush([freq, num]);
            if (this.heap.length > k) {
                this.heapPop();
            }
        }

        const res: number[] = new Array(k);
        let index = 0;

        while (this.heap.length > 0) {
            res[index++] = this.heapPop()![1];
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
    const solver = new TopKFreqElementsTS();

    for (let i = 0; i < testArrays.length; i++) {
        const result = solver.solution(testArrays[i], ks[i]);
        console.log(`Test case ${i + 1}:`, result);
    }
})();

(function main() {
    const testArrays = [
        [1, 1, 1, 2, 2, 3],
        [4, 4, 4, 6, 6, 7, 8, 8, 8, 8],
        [5, 5, 5, 5, 6, 6, 7],
        [1],
        [1, 2]
    ];

    const ks = [2, 3, 1, 1, 2];
    const solver = new TopKFreqElementsTS();

    for (let i = 0; i < testArrays.length; i++) {
        const result = solver.solution(testArrays[i], ks[i]);
        console.log(`Test case ${i + 1}:`, result);
    }
})();