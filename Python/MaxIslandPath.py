# Given a 2D grid of '1's (land) and '0's (water), find the max path better the islands
# Only vertical and horizontal paths are valid & 1 signifies an island  & 0 signifies water
# Depth First Search Strategy

class MaxIslandPathProblem:
    def __init__(self):
        self.rows = 0
        self.cols = 0

    def DFS(self, grid, row, col):
        # In bounds & is island check
        if (
            row < 0 or row >= self.rows or
            col < 0 or col >= self.cols or
            grid[row][col] != 1
        ):
            return 0

        # Mark current as visited & check neighbors
        grid[row][col] = -1

        size = 1
        directions = [(1,0), (-1,0), (0,1), (0,-1)]

        for dr, dc in directions:
            size += self.DFS(grid, row + dr, col + dc)

        return size

    def MaxIslandPath(self, map):
        if not map or not map[0]:
            return 0

        self.rows = len(map)
        self.cols = len(map[0])
        maxPath = 0

        for r in range(self.rows):
            for c in range(self.cols):
                if map[r][c] == 1:
                    maxPath = max(maxPath, self.DFS(map, r, c))

        return maxPath

def main():
    solver = MaxIslandPathProblem()
    map = [
        [0, 1, 0, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 1]
    ]
    print("Max Path:", solver.MaxIslandPath(map))


if __name__ == "__main__":
    main()