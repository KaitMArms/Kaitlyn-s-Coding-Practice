/*Given a 2D grid of '1's (land) and '0's (water), find the max path better the islands
Only vertical and horizontal paths are valid & 1 signifies an island  & 0 signifies water
Depth First Search Strategy */

function MaxIslandPath(map: number[][]): number {
    if(map.length === 0) return 0;
    const rows: number = map.length;
    const cols: number = map[0].length;
    let max: number = 0;

    function DFS(row: number, col: number): number {
        
        // In bounds & is island check
        if (
            row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            map[row][col] !== 1
        ) {
            return 0;
        }

        // Mark current as visited & check neighbors
        map[row][col] = -1;
        let size: number = 1;
        const dirRows: number[] = [1, -1, 0, 0];
        const dirCols: number[] = [0, 0, 1, -1];

        for (let i = 0; i < 4; i++) {
            size += DFS(row + dirRows[i], col + dirCols[i]);
        }

        return size;
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (map[row][col] === 1) {
                max = Math.max(max, DFS(row, col));
            }
        }
    }

    return max;
}

(function main(): void {
    const map: number[][] = [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1]
    ];

    console.log("Max Path:", MaxIslandPath(map));
})();