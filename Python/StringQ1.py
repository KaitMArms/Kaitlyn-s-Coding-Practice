# Make a function that takes in 2 strings and determines if they are reverses of each other
# Assume both strings are not empty and of equal length
def are_reverses(string1, string2):
    for i in range(len(string1)):
        j = len(string2) - i -1
        if string1[i] != string2[j]: return False
    return True

def main():
    string1 = "ABC"
    string2 = "CBA" 
    string3 = "CDA"
    res1 = are_reverses(string1, string2)
    res2 = are_reverses(string1, string3)
    print("The results are: ", res1, "and", res2)
    return

if __name__ == "__main__":
    main()