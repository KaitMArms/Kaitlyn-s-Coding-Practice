/* You are given a 2d array that represents a chess board with rooks. T
he rooks are denoted by 1s and empty spaces denoted by 0 You need to see if any rooks can attack eachother. 
If yes return false, if no return true */

class Rooks2DArray{
    RooksAreSafe(a: number[][]): boolean {
        const seenRows = new Set<number>();
        const seenCols = new Set<number>();

        for(let i = 0; i < a.length; i++){
            for(let j = 0; j < a.length; j++){
                if(a[i][j] === i){
                    if(seenRows.has(i) || seenCols.has(j)) return false;
                    seenRows.add(i);
                    seenCols.add(j);
                }
            }
        }
        return true;
    }
}


(function main() {
    const rooks = new Rooks2DArray();
    const board: number[][] = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ];
    const safe = rooks.RooksAreSafe(board);
    console.log(`Rooks are safe: ${safe}`);
})();