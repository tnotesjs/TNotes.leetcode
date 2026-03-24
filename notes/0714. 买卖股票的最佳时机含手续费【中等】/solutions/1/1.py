class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        hold, cash = -prices[0], 0
        for i in range(1, len(prices)):
            cash, hold = max(cash, hold + prices[i] - fee), max(hold, cash - prices[i])
        return cash
