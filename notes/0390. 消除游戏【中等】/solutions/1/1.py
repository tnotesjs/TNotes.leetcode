class Solution:
    def lastRemaining(self, n: int) -> int:
        head, step, remaining, left = 1, 1, n, True
        while remaining > 1:
            if left or remaining % 2 == 1:
                head += step
            step *= 2
            remaining //= 2
            left = not left
        return head
