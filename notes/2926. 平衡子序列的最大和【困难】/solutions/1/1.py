class Solution:
    def maxBalancedSubsequenceSum(self, nums: list[int]) -> int:
        n = len(nums)
        b = [nums[i] - i for i in range(n)]
        sorted_b = sorted(set(b))
        rank = {v: i for i, v in enumerate(sorted_b)}
        m = len(sorted_b)
        tree = [float('-inf')] * (4 * m)
        def update(node, lo, hi, pos, val):
            if lo == hi:
                tree[node] = max(tree[node], val)
                return
            mid = (lo + hi) // 2
            if pos <= mid:
                update(2 * node, lo, mid, pos, val)
            else:
                update(2 * node + 1, mid + 1, hi, pos, val)
            tree[node] = max(tree[2 * node], tree[2 * node + 1])
        def query(node, lo, hi, l, r):
            if l > r or lo > r or hi < l:
                return float('-inf')
            if l <= lo and hi <= r:
                return tree[node]
            mid = (lo + hi) // 2
            return max(query(2 * node, lo, mid, l, r), query(2 * node + 1, mid + 1, hi, l, r))
        ans = float('-inf')
        for i in range(n):
            r = rank[b[i]]
            best = query(1, 0, m - 1, 0, r)
            dp = nums[i] + (best if best > 0 else 0)
            update(1, 0, m - 1, r, dp)
            ans = max(ans, dp)
        return ans
