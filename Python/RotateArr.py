# Rotate an array to the right by k steps, where k is non-negative
# Expected input is nums array and int k & expected out is nums array
# Constraints: 1 ≤ nums.length ≤ 10⁵ & -10⁹ ≤ nums[i] ≤ 10⁹

def RotateArr(arr, k):
    arrSize = len(arr)
    if k == arrSize or k % arrSize == 0: 
        return arr
    elif k > arrSize:
        k = k % arrSize

    reverse(arr, 0, arrSize - k - 1)
    reverse(arr, arrSize - k, arrSize - 1)
    reverse(arr, 0, arrSize - 1)

    return arr
        

def reverse(arr, start, end):
    while start < end:
        tmp = arr[start]
        arr[start] = arr[end]
        arr[end] = tmp
        start += 1
        end -= 1

def main():
    testArrays = [
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
    ]

    kValues = [3, 0, 1, 4, 6, 10, 1, 2, 1, 3]

    expectedResults = [
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
    ]

    for i in range(len(testArrays)):
        input_arr = testArrays[i]
        result = RotateArr(input_arr.copy(), kValues[i])  # call function directly
        print(f"Input: {input_arr} Result: {result} Expected Result: {expectedResults[i]}")

if __name__ == "__main__":
    main()
