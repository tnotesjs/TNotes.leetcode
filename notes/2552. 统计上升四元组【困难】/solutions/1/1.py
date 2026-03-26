class Solution:
    def countQuadruplets(self, nums: list[int]) -> int:
        n = len(nums)
        ans = 0
        f = [0] * n  # f[j] = 满足 i<j<k, nums[i]<nums[k]<nums[j] 的对数
        for k in range(1, n):
            cnt_less = 0
            for j in range(k):
                if nums[j] < nums[k]:
                    ans += f[j]
                    cnt_less += 1
                elif nums[j] > nums[k]:
                    f[j] += cnt_less
        return ans
