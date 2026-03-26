class Solution:
    def getSubarrayBeauty(self, nums: list[int], k: int, x: int) -> list[int]:
        cnt = [0] * 101  # 偏移 50
        ans = []
        for i, v in enumerate(nums):
            cnt[v + 50] += 1
            if i >= k:
                cnt[nums[i - k] + 50] -= 1
            if i >= k - 1:
                count = 0
                beauty = 0
                for j in range(101):
                    count += cnt[j]
                    if count >= x:
                        beauty = j - 50
                        break
                ans.append(beauty if beauty < 0 else 0)
        return ans
