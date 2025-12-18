/*Given n non-negative integers representing heights of vertical lines on the x-axis, 
find the max area of water given by two lines with the x-axis.
Assume area = min(h1,h2) x width, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴*/

class WithMostWater{
    solution(arr: number[]){
        let left = 0;
        let right = arr.length;
        let maxArea = 0;

        while(left < right){
            let curArea = Math.min(arr[left], arr[right]) * (right - left);
            if(curArea > maxArea){maxArea = curArea;}

            if(arr[left] < arr[right]){left++;}
            else{right--;}
        }
        return maxArea
    }
}

(function main(){
    const wmw = new WithMostWater();

    // Test Cases
    let heights1 = [1, 2, 3, 4, 5];
    let heights2 = [5, 4, 3, 2, 1];
    let heights3 = [3, 3, 3, 3];
    let heights4 = [0, 2, 0, 3];
    let heights5 = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    console.log("Input: " + JSON.stringify(heights1) + " Result: " + wmw.solution(heights1) + " Expected Result: 6");
    console.log("Input: " + JSON.stringify(heights2) + " Result: " + wmw.solution(heights2) + " Expected Result: 6");
    console.log("Input: " + JSON.stringify(heights3) + " Result: " + wmw.solution(heights3) + " Expected Result: 9");
    console.log("Input: " + JSON.stringify(heights4) + " Result: " + wmw.solution(heights4) + " Expected Result: 4");
    console.log("Input: " + JSON.stringify(heights5) + " Result: " + wmw.solution(heights5) + " Expected Result: 49");
})();