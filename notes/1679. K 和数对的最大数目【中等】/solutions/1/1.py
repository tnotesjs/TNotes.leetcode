class Solution:
    def maxOperations(self, nums: list[int], k: int) -> int:
        from collections import Counter
        count = Counter(nums)
        res = 0
        for x in list(count.keys()):
            need = k - x
            if need == x:
                res += count[x] // 2
                count[x] = count[x] % 2
            elif need in count:
                pairs = min(count[x], count[need])
                res += pairs
                count[x] -= pairs
                count[need] -= pairs
        return res
