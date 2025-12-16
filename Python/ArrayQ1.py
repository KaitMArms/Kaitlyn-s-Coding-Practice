# Make a function that returns the second largest variable in the list. 
# The sample is [1, 3, 4, 5, 0, 2]. If list is null or only has 1 var return None

def second_largest(a):
    # Smallest Cases
    if(len(a) <= 1): return None
    
    # Array is capable of having second so find it
    largest = a[0]
    second = float('-inf')
    for i in a:
        if i > largest: 
            second = largest
            largest = i 
        elif i <= largest and i > second:
            second = i 
    return second

def main():
    a = [1, 3, 4, 5, 0, 2]
    res = second_largest(a)
    print(res)
    return

if __name__ == "__main__":
    main()