/*Given a 2D grid of '1's (land) and '0's (water), find the max path better the islands
Only vertical and horizontal paths are valid & 1 signifies an island  & 0 signifies water
*/

class MaxIslandPath {
    int rows;
    int cols;

    public int DFS(int[][] map, int row, int col){

        // In bounds & is island check
        if(row < 0 || row >= rows || col < 0 || col >= cols || map[row][col] != 1) {return 0;}

        // Mark current as visited & check neighbors
        map[row][col] = -1;
        int size = 1;
        int[] dirRows = {1, -1, 0, 0};
        int[] dirCols = {0, 0, 1, -1};
        for(int i = 0; i < 4; i++){
            size += DFS(map, row + dirRows[i], col + dirCols[i]);
        }

        return size;
    }

    public int maxIslandPath(int[][] map){
        if(map == null || map.length == 0) {return 0;}
        rows = map.length;
        cols = map[0].length;
        int max = 0;

        for(int row = 0; row < rows; row++){
            for(int col = 0; col < cols; col++){
                if(map[row][col] == 1){
                    int size = DFS(map, row, col);
                    max = Math.max(max, size);
                }
            }
        }

        return max;
    }

    public static void main(String[] args){
        MaxIslandPath maxPath = new MaxIslandPath();
        int[][] map = {
            {0, 1, 0, 0},
            {0, 1, 1, 0},
            {0, 0, 0, 1}
        };
        System.out.println("Max Path: " + maxPath.maxIslandPath(map));
    }
}

