class Solution:
    def minimumCost(self, nums: list[int]) -> int:
        import bisect
        nums.sort()
        pals = []
        for length in range(1, 11):
            half_len = (length + 1) // 2
            start = 10 ** (half_len - 1) if half_len > 1 else 1
            for h in range(start, 10 ** half_len):
                s = str(h)
                pal = int(s + s[-2::-1]) if length % 2 else int(s + s[::-1])
                if pal > 10 ** 9:
                    break
                pals.append(pal)
        pals.sort()
        median = nums[len(nums) // 2]
        idx = bisect.bisect_left(pals, median)
        ans = float('inf')
        for i in range(max(0, idx - 1), min(len(pals), idx + 2)):
            cost = sum(abs(x - pals[i]) for x in nums)
            ans = min(ans, cost)
        return ans
