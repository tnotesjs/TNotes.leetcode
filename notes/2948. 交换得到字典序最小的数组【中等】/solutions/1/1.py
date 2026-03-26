class Solution:
    def lexicographicallySmallestArray(self, nums: list[int], limit: int) -> list[int]:
        n = len(nums)
        order = sorted(range(n), key=lambda i: nums[i])
        res = [0] * n
        i = 0
        while i < n:
            j = i + 1
            while j < n and nums[order[j]] - nums[order[j - 1]] <= limit:
                j += 1
            group = order[i:j]
            sorted_idx = sorted(group)
            sorted_val = sorted(nums[idx] for idx in group)
            for idx, val in zip(sorted_idx, sorted_val):
                res[idx] = val
            i = j
        return res
