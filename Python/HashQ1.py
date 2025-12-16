# Given a list of Names , use a hash table to find the duplicate
def findDup(names):
    name_dict = {}
    for name in names:
        if name in name_dict:
            return name
        name_dict[name] = 1
    return None


def main():
    names = ['George', 'Tom', 'Emily', 'Jenny', 'Tom']
    print(findDup(names), "is the duplicate.")


if __name__ == "__main__":
    main()