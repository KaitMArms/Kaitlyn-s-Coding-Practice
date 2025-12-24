// Place N queens on an N×N chessboard so no two queens attack each other. Return one possible solution.

function NQueensTS(n: number): number {
    const cols: Set<number> = new Set();
    const diag1: Set<number> = new Set(); 
    const diag2: Set<number> = new Set(); 
    let res: number = 0;

    function backtrack(row: number): void {
        if (row === n) {
            res++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col)) continue;
            if (diag1.has(row - col)) continue;
            if (diag2.has(row + col)) continue;

            // Place queen
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            // Remove queen (backtrack)
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return res;
}

const nTS: number = 8;
console.log(`Number of solutions for ${nTS}-Queens:`, NQueensTS(n));