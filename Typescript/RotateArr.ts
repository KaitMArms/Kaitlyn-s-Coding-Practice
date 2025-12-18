/*Rotate an array to the right by k steps, where k is non-negative
Expected input is nums array and int k & expected out is nums array
Constraints: 1 ≤ nums.length ≤ 10⁵ & -10⁹ ≤ nums[i] ≤ 10⁹*/

class RotateArr{
    rotateArr(arr: number[], k: number){
        let arrSize = arr.length;
        if(k == arrSize || k % arrSize == 0){return arr}
        else if(k > arrSize) {k = k % arrSize;}

        this.reverse(arr, 0, arrSize - k - 1);
        this.reverse(arr, arrSize - k, arrSize - 1);
        this.reverse(arr, 0, arrSize - 1);

        return arr;
    }

    reverse(arr: number[], start: number, end: number){
        while(start < end){
            let tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++;
            end--;
        }
    }
}

(function main(){
    const solver = new RotateArr();

    const testArrays = [
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3],
        [10, 20, 30],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [42],
        [1, 2],
        [-1, -100, 3, 99],
        [1000000000, -1000000000],
        [7, 7, 7, 7]
    ];

    const kValues = [3, 0, 1, 4, 6, 10, 1, 2, 1, 3];

    const expectedResults = [
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
    ];

    for (let i = 0; i < testArrays.length; i++) {
        const input = testArrays[i];
        const result = solver.rotateArr([...input], kValues[i]); // clone input

        console.log(
            "Input: " + JSON.stringify(input) +
            " Result: " + JSON.stringify(result) +
            " Expected Result: " + expectedResults[i]
        );
    }
})();