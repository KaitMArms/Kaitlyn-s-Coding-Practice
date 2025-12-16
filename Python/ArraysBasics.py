# Write your solution for initiating new list called a_list with the elementes: item1 item2 and item3
a_list = {"item1", "item2", "item3"}
print("a_list is: \n \t")
print(a_list)

# Change 2nd element in b_list to 1 given b_list has the values 0, 0, 0
b_list = {0, 0, 0}
print("old b_list is: \n \t")
print(b_list)
b_list[1] = 1
print("new b_list is: \n \t")
print(b_list)

# Iterate through c_list using for element method given the values in c_list are item0, item1, item2
c_list = {"item0", "item1", "item2"}
print("c_list is: \n")
for i in (c_list):
    print(i)

# Iterate over each element in d_list using the for i method if d_list contains item0, item1, item2
d_list = {"item0", "item1", "item2"}
for i in range(3):
    print(i)

# Find sum of e_list if e_list contains the values 32, 55, 710, 1
e_list = {32, 55, 710, 1} # could also use sum()
sum = 0
for i in (e_list):
    sum += i
print("The sum of e_list is {sum}") #should be 798
