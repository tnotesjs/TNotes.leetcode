class Solution:
    def sumCounts(self, nums: list[int]) -> int:
        MOD = 10**9 + 7
        n = len(nums)
        sum_d = [0] * (4 * n)
        sum_d2 = [0] * (4 * n)
        lazy = [0] * (4 * n)
        cnt = [0] * (4 * n)

        def build(node: int, l: int, r: int) -> None:
            cnt[node] = r - l + 1
            if l == r:
                return
            mid = (l + r) // 2
            build(2 * node, l, mid)
            build(2 * node + 1, mid + 1, r)

        def push_down(node: int) -> None:
            if lazy[node]:
                val = lazy[node]
                for child in (2 * node, 2 * node + 1):
                    c = cnt[child]
                    sum_d2[child] = (sum_d2[child] + 2 * val * sum_d[child] + val * val * c) % MOD
                    sum_d[child] = (sum_d[child] + val * c) % MOD
                    lazy[child] = (lazy[child] + val) % MOD
                lazy[node] = 0

        def update(node: int, l: int, r: int, ql: int, qr: int) -> None:
            if ql > r or qr < l:
                return
            if ql <= l and r <= qr:
                c = cnt[node]
                sum_d2[node] = (sum_d2[node] + 2 * sum_d[node] + c) % MOD
                sum_d[node] = (sum_d[node] + c) % MOD
                lazy[node] = (lazy[node] + 1) % MOD
                return
            push_down(node)
            mid = (l + r) // 2
            update(2 * node, l, mid, ql, qr)
            update(2 * node + 1, mid + 1, r, ql, qr)
            sum_d[node] = (sum_d[2 * node] + sum_d[2 * node + 1]) % MOD
            sum_d2[node] = (sum_d2[2 * node] + sum_d2[2 * node + 1]) % MOD

        def query_fn(node: int, l: int, r: int, ql: int, qr: int) -> int:
            if ql > r or qr < l:
                return 0
            if ql <= l and r <= qr:
                return sum_d2[node]
            push_down(node)
            mid = (l + r) // 2
            return (query_fn(2 * node, l, mid, ql, qr) + query_fn(2 * node + 1, mid + 1, r, ql, qr)) % MOD

        build(1, 0, n - 1)
        prev = {}
        ans = 0
        for i in range(n):
            p = prev.get(nums[i], -1) + 1
            update(1, 0, n - 1, p, i)
            prev[nums[i]] = i
            ans = (ans + query_fn(1, 0, n - 1, 0, i)) % MOD
        return ans
