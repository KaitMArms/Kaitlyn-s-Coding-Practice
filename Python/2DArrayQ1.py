# You are given a 2d array with the same number of rows and columns. Write a function that adds up diagonal elements and returns the sum
# In the instance below the diagonals are 1, 5, & 9

def diagonalSum(a):
    total = 0
    for i in range(len(a)):
        total += a[i][i]
    return total


def main():
    a = [[1, 2, 3],[4, 5, 6], [7, 8, 9]]
    sum = diagonalSum(a)
    print("The diagonal sum is: ", sum)

if __name__ == "__main__":
    main()