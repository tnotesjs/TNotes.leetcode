class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        n = len(nums)
        even_freq = Counter(nums[i] for i in range(0, n, 2))
        odd_freq = Counter(nums[i] for i in range(1, n, 2))
        even_top = even_freq.most_common(2) + [(-1, 0), (-1, 0)]
        odd_top = odd_freq.most_common(2) + [(-1, 0), (-1, 0)]
        even_count = (n + 1) // 2
        odd_count = n // 2
        if even_top[0][0] != odd_top[0][0]:
            return (even_count - even_top[0][1]) + (odd_count - odd_top[0][1])
        return min(
            (even_count - even_top[0][1]) + (odd_count - odd_top[1][1]),
            (even_count - even_top[1][1]) + (odd_count - odd_top[0][1])
        )
