// Place N queens on an N×N chessboard so no two queens attack each other. Return one possible solution.

function NQueens(n) {
    const cols = new Set();
    const diag1 = new Set(); 
    const diag2 = new Set(); 
    let res = 0;

    function backtrack(row) {
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

            // Remove queen & recurse
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return res;
}

const n = 8;
console.log(`Number of solutions for ${n}-Queens:`, NQueens(n));