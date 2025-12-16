# Defining
s1 = "this is a string"
s2 = 'this is also a string'

# Retrieving chars in string
c1 = s1[0] # c1 becomes its own string "t"

# Iterating
for i in s1:
    print(i)
for i in range(len(s2)):
    print(s2[i])

# Initialize a new string "ABC" & store it in a new var called a_string
a_string = "ABC"
print("a_string is: \t", a_string)

# Initialize b_string as "DEF" and print the second char
b_string = "DEF"
print(" The second character in b_string is: \t", b_string)

# Inititalize c_string as "GHI" and iterate through it using the for character method
c_string = "GHI"
for i in c_string:
    print(i)

# Inititalize d_string as "PQR" and iterate hrough it using the for range method
d_string = "PQR" 
for i in range(3):
    print(d_string[i])



