/* You are given a 2d array that represents a chess board with rooks. T
he rooks are denoted by 1s and empty spaces denoted by 0 You need to see if any rooks can attack eachother. 
If yes return false, if no return true */
import java.util.*;

class Rooks2DArray{
    
    public boolean RooksAreSafe(int[][] a){
        HashSet<String> seenRows = new HashSet<>();
        HashSet<String> seenCols = new HashSet<>();

        for(int i = 0; i < a.length; i++){
            for(int j = 0; j < a.length; i++){
                if(a[i][j] == 1){
                    if(seenRows.contains(String.valueOf(i)) || seenCols.contains(String.valueOf(j))){return false;}
                    seenRows.add(String.valueOf(i));
                    seenCols.add(String.valueOf(j));
                }
            }
        }
        return true;
    } 

    public static void main(String[] args) {
        Rooks2DArray rooks = new Rooks2DArray();
        int[][] board = {
            {1, 0, 0},
            {0, 1, 0},
            {0, 0, 0}
        };

        if(rooks.RooksAreSafe(board)){
            System.out.println("All rooks are safe.");
        }
        else{
            System.out.println("One or more rooks can attack each other.");
        }
    }
}
