class Solution:
    def minimumAddedCoins(self, coins: list[int], target: int) -> int:
        coins.sort()
        reach = 0
        add = i = 0
        while reach < target:
            if i < len(coins) and coins[i] <= reach + 1:
                reach += coins[i]
                i += 1
            else:
                reach += reach + 1
                add += 1
        return add
