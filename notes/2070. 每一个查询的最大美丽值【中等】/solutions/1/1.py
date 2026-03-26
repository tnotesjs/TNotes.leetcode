class Solution:
    def maximumBeauty(self, items: list[list[int]], queries: list[int]) -> list[int]:
        from bisect import bisect_right
        items.sort()
        for i in range(1, len(items)):
            items[i][1] = max(items[i][1], items[i - 1][1])
        prices = [it[0] for it in items]
        ans = []
        for q in queries:
            pos = bisect_right(prices, q) - 1
            ans.append(items[pos][1] if pos >= 0 else 0)
        return ans
