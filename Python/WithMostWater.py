# Given n non-negative integers representing heights of vertical lines on the x-axis, 
# find the max area of water given by two lines with the x-axis.
# Assume area = min(h1,h2) x width, 2 ≤ n ≤ 10⁵, 0 ≤ height[i] ≤ 10⁴

def WithMostWater(arr):
    left = 0
    right = len(arr) - 1
    maxArea =0

    while(left < right):
        curArea = min(arr[left], arr[right]) * (right - left)
        if(curArea > maxArea): 
            maxArea = curArea
        
        if(arr[left] < arr[right]): 
            left += 1
        else:
            right -= 1
    
    return maxArea

def main():
    # Test Cases
    heights1 = [1, 2, 3, 4, 5]
    heights2 = [5, 4, 3, 2, 1]
    heights3 = [3, 3, 3, 3]
    heights4 = [0, 2, 0, 3]
    heights5 = [1, 8, 6, 2, 5, 4, 8, 3, 7]

    print("Input: ", heights1, " Result: ", WithMostWater(heights1), " Expected Result: 6")
    print("Input: ", heights1, " Result: ", WithMostWater(heights1), " Expected Result: 6")
    print("Input: ", heights1, " Result: ", WithMostWater(heights1), " Expected Result: 9")
    print("Input: ", heights1, " Result: ", WithMostWater(heights1), " Expected Result: 4")
    print("Input: ", heights1, " Result: ", WithMostWater(heights1), " Expected Result: 49")

if __name__ == "__main__":
    main()