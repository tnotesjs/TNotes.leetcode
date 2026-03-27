class Solution:
    def unmarkedSumArray(self, nums: list[int], queries: list[list[int]]) -> list[int]:
        n = len(nums)
        sorted_pairs = sorted(range(n), key=lambda i: (nums[i], i))
        marked = [False] * n
        total_sum = sum(nums)
        ptr = 0
        res = []
        for index, k in queries:
            if not marked[index]:
                marked[index] = True
                total_sum -= nums[index]
            remaining = k
            while remaining > 0 and ptr < n:
                if not marked[sorted_pairs[ptr]]:
                    marked[sorted_pairs[ptr]] = True
                    total_sum -= nums[sorted_pairs[ptr]]
                    remaining -= 1
                ptr += 1
            res.append(total_sum)
        return res
