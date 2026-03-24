class Solution:
    def reachNumber(self, target: int) -> int:
        target = abs(target)
        s, step = 0, 0
        while s < target or (s - target) % 2 != 0:
            step += 1
            s += step
        return step
