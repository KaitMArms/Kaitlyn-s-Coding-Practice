# Given a list of numbers, find the pair that add up to 10 using a hash table in O(n)
# Print out the pair the return nothing, numbers can be negative but will always be whole
# findPair must return none and if there are more then 1 pairs print out the first, if there are no pairs print "No pairs exist in the list"
def findPair(a):
    seen = {}

    for num in a:
        complement = 10 - num
        if complement in seen:
            print("Pair found: ", complement, ",", num)
            return None
        seen[num] = 1
    
    print("No pairs exist in the list")
    return None


def main():
    a = [3, 4, 1, 2, 9]


if __name__ == "__main__":
    main()