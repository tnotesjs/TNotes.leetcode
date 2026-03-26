class Solution:
    def countDistinct(self, nums: list[int], k: int, p: int) -> int:
        n = len(nums)
        seen = set()
        for i in range(n):
            div_count = 0
            for j in range(i, n):
                if nums[j] % p == 0:
                    div_count += 1
                if div_count > k:
                    break
                seen.add(tuple(nums[i:j+1]))
        return len(seen)
