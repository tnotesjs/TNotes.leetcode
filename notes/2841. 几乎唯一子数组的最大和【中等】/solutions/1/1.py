class Solution:
    def maxSum(self, nums: List[int], m: int, k: int) -> int:
        cnt = defaultdict(int)
        s = 0
        ans = 0
        for i, x in enumerate(nums):
            s += x
            cnt[x] += 1
            if i >= k:
                old = nums[i - k]
                s -= old
                cnt[old] -= 1
                if cnt[old] == 0:
                    del cnt[old]
            if i >= k - 1 and len(cnt) >= m:
                ans = max(ans, s)
        return ans
