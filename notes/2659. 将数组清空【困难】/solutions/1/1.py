class Solution:
    def countOperationsToEmptyArray(self, nums: list[int]) -> int:
        n = len(nums)
        indices = sorted(range(n), key=lambda i: nums[i])

        bit = [0] * (n + 2)
        def update(i: int, val: int) -> None:
            i += 1
            while i <= n:
                bit[i] += val
                i += i & (-i)
        def query(i: int) -> int:
            s = 0
            i += 1
            while i > 0:
                s += bit[i]
                i -= i & (-i)
            return s
        def range_query(l: int, r: int) -> int:
            if l > r:
                return 0
            return query(r) - (query(l - 1) if l > 0 else 0)

        for i in range(n):
            update(i, 1)

        ops = n
        prev = -1
        for cur in indices:
            if prev == -1:
                ops += cur
            elif cur > prev:
                ops += range_query(prev + 1, cur - 1)
            else:
                ops += range_query(prev + 1, n - 1) + range_query(0, cur - 1)
            update(cur, -1)
            prev = cur
        return ops
