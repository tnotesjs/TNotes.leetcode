class Solution:
    def goodDaysToRobBank(self, security: list[int], time: int) -> list[int]:
        n = len(security)
        dec = [0] * n
        inc = [0] * n
        for i in range(1, n):
            if security[i] <= security[i - 1]:
                dec[i] = dec[i - 1] + 1
        for i in range(n - 2, -1, -1):
            if security[i] <= security[i + 1]:
                inc[i] = inc[i + 1] + 1
        return [i for i in range(time, n - time) if dec[i] >= time and inc[i] >= time]
