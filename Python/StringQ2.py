# Given 2 strings of numbers that compares 2 strings to determine if the first is larger then the third
# You cannot convert them to numbers 
def larger_than(string1, string2):
    if(len(string1) > len(string2)):
        return True
    elif(len(string1) < len(string2)):
        return False
    elif(string1 == string2): return False
    else:
        for i in range(len(string1)):
            if(string1[i] < string2[i]): return False
    return True


def main():
    Test1_1 = "1232"
    Test1_2 = "201"
    Test2_1 = "254"
    Test2_2 = "2131"
    Test3_1 = "232"
    Test3_2 = "212" 

    res1 = larger_than(Test1_1, Test1_2)
    res2 = larger_than(Test2_1, Test2_2)
    res3 = larger_than(Test3_1, Test3_2)
    print("Test 1: ", res1)
    print("Test 2: ", res2)
    print("Test 3: ", res3)
    return

if __name__ == "__main__":
    main()