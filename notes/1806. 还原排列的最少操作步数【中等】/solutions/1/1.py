class Solution:
    def reinitializePermutation(self, n: int) -> int:
        pos, steps = 1, 0
        while True:
            if pos % 2 == 0:
                pos = pos // 2
            else:
                pos = n // 2 + (pos - 1) // 2
            steps += 1
            if pos == 1:
                return steps
