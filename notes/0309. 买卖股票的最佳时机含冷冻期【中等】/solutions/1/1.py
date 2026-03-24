class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
        hold, sold, rest = -prices[0], 0, 0
        for i in range(1, len(prices)):
            prev_sold = sold
            sold = hold + prices[i]
            hold = max(hold, rest - prices[i])
            rest = max(rest, prev_sold)
        return max(sold, rest)
