class Solution:
    def minimumLines(self, stockPrices: list[list[int]]) -> int:
        stockPrices.sort()
        n = len(stockPrices)
        if n <= 1:
            return 0
        res = 1
        for i in range(2, n):
            dx1 = stockPrices[i][0] - stockPrices[i - 1][0]
            dy1 = stockPrices[i][1] - stockPrices[i - 1][1]
            dx2 = stockPrices[i - 1][0] - stockPrices[i - 2][0]
            dy2 = stockPrices[i - 1][1] - stockPrices[i - 2][1]
            if dy1 * dx2 != dy2 * dx1:
                res += 1
        return res
