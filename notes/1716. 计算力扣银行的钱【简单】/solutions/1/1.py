class Solution:
    def totalMoney(self, n: int) -> int:
        weeks, rem = divmod(n, 7)
        full_weeks_sum = 7 * weeks * (weeks + 7) // 2
        rem_sum = rem * (2 * weeks + rem + 1) // 2
        return full_weeks_sum + rem_sum
