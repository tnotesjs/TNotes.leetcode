class Solution:
    def minOperationsMaxProfit(self, customers: list[int], boardingCost: int, runningCost: int) -> int:
        waiting = profit = max_profit = 0
        best_rot = -1
        rot = i = 0
        while i < len(customers) or waiting > 0:
            if i < len(customers):
                waiting += customers[i]
            board = min(waiting, 4)
            waiting -= board
            rot += 1
            profit += board * boardingCost - runningCost
            if profit > max_profit:
                max_profit = profit
                best_rot = rot
            i += 1
        return best_rot
