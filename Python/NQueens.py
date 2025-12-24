# Place N queens on an N×N chessboard so no two queens attack each other. Return one possible solution.

def NQueens(n):
    cols = set()
    diag1 = set()
    diag2 = set()
    res = 0

    def Recurs(rows):
        nonlocal res

        if rows == n:
            res += 1
            return
        
        for i in range(n):
            if i in cols:
                continue
            if (rows - i) in diag1:
                continue
            if (rows + i) in diag2:
                continue
            
            # Place queen
            cols.add(i)
            diag1.add(rows - i)
            diag2.add(rows + i)

            # Recurse & remove queen
            Recurs(rows + 1)
            cols.remove(i)
            diag1.remove(rows - i)
            diag2.remove(rows + i)
    Recurs(0)
    return res

def main():
    n = 8
    print("Number of solutions for ", n, "-Queens: ", NQueens(n))

if __name__ == "__main__":
    main()

