# Generate all permutations of a distinct int arr
# Input: int[] Output: int[] perms Constraints: 1<= arr length <= 6
# Backtracking method

def Permute(nums):
    res = []
    used = [0] * len(nums)

    def Backtrack(path):
        if len(path) == len(nums):
            res.append(path.copy())
            return
        
        for i in range(len(nums)):
            if used[i] == 1:
                continue

            used[i] = 1
            path.append(nums[i])
            Backtrack(path)
            path.pop()
            used[i] = 0

    Backtrack([])
    return res

def main():
    nums = [1, 2, 3]
    perms = Permute(nums)

    print("Permutations:")
    for p in perms:
        print(p)
    # Expected count: 6

if __name__ == "__main__":
    main()