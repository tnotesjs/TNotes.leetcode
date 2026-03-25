class Solution:
    def maxProfit(self, inventory: list[int], orders: int) -> int:
        MOD = 10 ** 9 + 7
        inventory.sort(reverse=True)
        inventory.append(0)
        res = 0
        for i in range(len(inventory) - 1):
            width = i + 1
            diff = inventory[i] - inventory[i + 1]
            total = width * diff
            if orders <= total:
                q, r = divmod(orders, width)
                res += (inventory[i] + inventory[i] - q + 1) * q // 2 * width
                res += (inventory[i] - q) * r
                return res % MOD
            orders -= total
            res += (inventory[i] + inventory[i + 1] + 1) * diff // 2 * width
        return res % MOD
