class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        cnt = defaultdict(int)
        cnt[0] = 1
        prefix_sum = count = 0
        for num in nums:
            prefix_sum += num
            count += cnt[prefix_sum - k]
            cnt[prefix_sum] += 1
        return count
