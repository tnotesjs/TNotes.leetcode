class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        x = y = d = 0
        for c in instructions:
            if c == 'G':
                x += dirs[d][0]
                y += dirs[d][1]
            elif c == 'L':
                d = (d + 3) % 4
            else:
                d = (d + 1) % 4
        return (x == 0 and y == 0) or d != 0
