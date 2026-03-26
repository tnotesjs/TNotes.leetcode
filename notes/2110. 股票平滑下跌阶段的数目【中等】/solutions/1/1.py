class Solution:
    def getDescentPeriods(self, prices: List[int]) -> int:
        res = 0
        count = 1
        for i in range(len(prices)):
            if i > 0 and prices[i - 1] - prices[i] == 1:
                count += 1
            else:
                count = 1
            res += count
        return res
