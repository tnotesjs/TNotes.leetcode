class Solution:
    def missingRolls(self, rolls: list[int], mean: int, n: int) -> list[int]:
        total = mean * (n + len(rolls))
        remaining = total - sum(rolls)
        if remaining < n or remaining > 6 * n:
            return []
        result = [1] * n
        remaining -= n
        for i in range(n):
            add = min(remaining, 5)
            result[i] += add
            remaining -= add
            if remaining == 0:
                break
        return result
