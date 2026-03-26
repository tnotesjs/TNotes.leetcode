class Solution:
    def maximumBobPoints(self, numArrows: int, aliceArrows: list[int]) -> list[int]:
        best_score, best_mask = 0, 0
        for mask in range(1 << 12):
            cost = score = 0
            for i in range(12):
                if mask & (1 << i):
                    cost += aliceArrows[i] + 1
                    score += i
            if cost <= numArrows and score > best_score:
                best_score = score
                best_mask = mask
        result = [0] * 12
        remaining = numArrows
        for i in range(12):
            if best_mask & (1 << i):
                result[i] = aliceArrows[i] + 1
                remaining -= result[i]
        result[0] += remaining
        return result
