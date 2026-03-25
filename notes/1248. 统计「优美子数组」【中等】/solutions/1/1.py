class Solution:
    def numberOfSubarrays(self, nums: list[int], k: int) -> int:
        cnt = defaultdict(int)
        cnt[0] = 1
        odd_count = 0
        ans = 0
        for num in nums:
            if num % 2 == 1:
                odd_count += 1
            if odd_count >= k:
                ans += cnt[odd_count - k]
            cnt[odd_count] += 1
        return ans
