class Solution:
    def leftmostBuildingQueries(self, heights: list[int], queries: list[list[int]]) -> list[int]:
        n = len(heights)
        m = len(queries)
        ans = [-1] * m
        pending = [[] for _ in range(n)]

        for i, (a, b) in enumerate(queries):
            if a > b:
                a, b = b, a
            if a == b or heights[a] < heights[b]:
                ans[i] = b
            else:
                pending[b].append((heights[a], i))

        stack = []  # (高度, 下标)，从底到顶高度递减
        for i in range(n - 1, -1, -1):
            for h, qi in pending[i]:
                lo, hi, res = 0, len(stack) - 1, -1
                while lo <= hi:
                    mid = (lo + hi) // 2
                    if stack[mid][0] > h:
                        res = stack[mid][1]
                        lo = mid + 1
                    else:
                        hi = mid - 1
                ans[qi] = res
            while stack and stack[-1][0] <= heights[i]:
                stack.pop()
            stack.append((heights[i], i))

        return ans
