class Solution:
    def distance(self, nums: list[int]) -> list[int]:
        from collections import defaultdict
        n = len(nums)
        ans = [0] * n
        groups: dict[int, list[int]] = defaultdict(list)
        for i, x in enumerate(nums):
            groups[x].append(i)
        for indices in groups.values():
            m = len(indices)
            pre = [0] * (m + 1)
            for i in range(m):
                pre[i + 1] = pre[i] + indices[i]
            for i in range(m):
                idx = indices[i]
                left = idx * i - pre[i]
                right = pre[m] - pre[i + 1] - idx * (m - i - 1)
                ans[idx] = left + right
        return ans
