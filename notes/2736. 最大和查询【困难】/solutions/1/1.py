class Solution:
    def maximumSumQueries(self, nums1: list[int], nums2: list[int], queries: list[list[int]]) -> list[int]:
        n = len(nums1)
        pairs = sorted(zip(nums1, nums2), key=lambda p: -p[0])
        qs = sorted(enumerate(queries), key=lambda q: -q[1][0])

        ans = [0] * len(queries)
        stack: list[tuple[int, int]] = []
        j = 0

        for idx, (x, y) in qs:
            while j < n and pairs[j][0] >= x:
                a, b = pairs[j]
                s = a + b
                while stack and stack[-1][1] <= s:
                    stack.pop()
                if not stack or stack[-1][0] < b:
                    stack.append((b, s))
                j += 1
            lo, hi, res = 0, len(stack) - 1, -1
            while lo <= hi:
                mid = (lo + hi) // 2
                if stack[mid][0] >= y:
                    res = stack[mid][1]
                    hi = mid - 1
                else:
                    lo = mid + 1
            ans[idx] = res

        return ans
