class Solution:
    def handleQuery(self, nums1: list[int], nums2: list[int], queries: list[list[int]]) -> list[int]:
        n = len(nums1)
        tree = [0] * (4 * n)
        lazy = [False] * (4 * n)

        def build(o, l, r):
            if l == r:
                tree[o] = nums1[l]
                return
            m = (l + r) // 2
            build(2 * o, l, m)
            build(2 * o + 1, m + 1, r)
            tree[o] = tree[2 * o] + tree[2 * o + 1]

        def push_down(o, l, r):
            if lazy[o]:
                m = (l + r) // 2
                tree[2 * o] = (m - l + 1) - tree[2 * o]
                tree[2 * o + 1] = (r - m) - tree[2 * o + 1]
                lazy[2 * o] = not lazy[2 * o]
                lazy[2 * o + 1] = not lazy[2 * o + 1]
                lazy[o] = False

        def update(o, l, r, ql, qr):
            if ql <= l and r <= qr:
                tree[o] = (r - l + 1) - tree[o]
                lazy[o] = not lazy[o]
                return
            push_down(o, l, r)
            m = (l + r) // 2
            if ql <= m:
                update(2 * o, l, m, ql, qr)
            if qr > m:
                update(2 * o + 1, m + 1, r, ql, qr)
            tree[o] = tree[2 * o] + tree[2 * o + 1]

        build(1, 0, n - 1)
        s = sum(nums2)
        ans = []
        for t, l, r in queries:
            if t == 1:
                update(1, 0, n - 1, l, r)
            elif t == 2:
                s += tree[1] * l
            else:
                ans.append(s)
        return ans
