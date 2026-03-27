class Solution:
    def maximumHappinessSum(self, happiness: list[int], k: int) -> int:
        happiness.sort(reverse=True)
        total = 0
        for i in range(k):
            val = happiness[i] - i
            if val > 0:
                total += val
        return total
