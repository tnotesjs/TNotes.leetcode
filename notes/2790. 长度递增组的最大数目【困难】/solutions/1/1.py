class Solution:
    def maxIncreasingGroups(self, usageLimits: list[int]) -> int:
        usageLimits.sort()
        k = 0
        surplus = 0
        for limit in usageLimits:
            surplus += limit
            if surplus >= k + 1:
                k += 1
                surplus -= k
        return k
