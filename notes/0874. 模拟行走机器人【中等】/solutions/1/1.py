class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        obs = set(map(tuple, obstacles))
        dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
        x = y = d = res = 0
        for cmd in commands:
            if cmd == -2: d = (d + 3) % 4
            elif cmd == -1: d = (d + 1) % 4
            else:
                for _ in range(cmd):
                    nx, ny = x + dx[d], y + dy[d]
                    if (nx, ny) in obs: break
                    x, y = nx, ny
                    res = max(res, x * x + y * y)
        return res
