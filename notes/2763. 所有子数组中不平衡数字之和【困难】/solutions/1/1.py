class Solution:
    def sumImbalanceNumbers(self, nums: list[int]) -> int:
        n = len(nums)
        res = 0
        for i in range(n):
            seen = set()
            cnt = 0
            for j in range(i, n):
                v = nums[j]
                if v in seen:
                    pass
                elif (v - 1) in seen and (v + 1) in seen:
                    cnt -= 1
                elif (v - 1) not in seen and (v + 1) not in seen:
                    if seen:
                        cnt += 1
                seen.add(v)
                res += cnt
        return res
