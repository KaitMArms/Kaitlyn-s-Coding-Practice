# You are given a 2d array that represents a chess board with rooks. The rooks are denoted by 1s and empty spaces denoted by 0
# You need to see if any rooks can attack eachother. If yes return false, if no return true

def rooksAreSafe(board):
    seenRows = set()
    seenCols = set()

    for r in range(len(board)):
        for c in range(len(board[0])):
            if board[r][c] == 1:
                if r in seenRows or c in seenCols: return False
                seenRows.add(r)
                seenCols.add(c)

    return True  

def main():
    a = [[0, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 1]]
    if(rooksAreSafe(a) == True):
        print("All rooks are safe.")
    else:
        print("One or more of the rooks can attack each other.")

if __name__ == "__main__":
    main()