class Solution:
    def countMatchingSubarrays(self, nums: list[int], pattern: list[int]) -> int:
        n = len(nums)
        text = []
        for i in range(n - 1):
            d = nums[i + 1] - nums[i]
            text.append(1 if d > 0 else (-1 if d < 0 else 0))
        m = len(pattern)
        fail = [-1] * m
        for i in range(1, m):
            j = fail[i - 1]
            while j >= 0 and pattern[j + 1] != pattern[i]:
                j = fail[j]
            fail[i] = j + 1 if pattern[j + 1] == pattern[i] else -1
        count = 0
        j = -1
        for c in text:
            while j >= 0 and pattern[j + 1] != c:
                j = fail[j]
            if pattern[j + 1] == c:
                j += 1
            if j == m - 1:
                count += 1
                j = fail[j]
        return count
