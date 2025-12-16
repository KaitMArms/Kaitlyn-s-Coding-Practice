# Initilizing
a = [[1, 3, 9, 4], [5, 0, 8, -3]]

# Retrieving
a[0] # [1, 3, 9, 4]
a[0][1] # 3

# Iterating
for i in a:
    for j in i:
        print(j)

for i in range(len(a)):
    for j in range(len(a[i])):
        print(a[i][j])

# Initialize a new 2D array with [1,2,3] as the first row and [5,6,7] as the second
a2 =[[1, 2, 3],[[5, 6, 7]]]

# Replace the number 6 in the previous array with 99
a2[1][1] = 99