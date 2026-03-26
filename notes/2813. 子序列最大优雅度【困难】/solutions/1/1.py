class Solution:
    def findMaximumElegance(self, items: list[list[int]], k: int) -> int:
        items.sort(key=lambda x: -x[0])
        total_profit = 0
        seen = set()
        duplicates = []
        for i in range(k):
            total_profit += items[i][0]
            if items[i][1] in seen:
                duplicates.append(items[i][0])
            else:
                seen.add(items[i][1])
        ans = total_profit + len(seen) ** 2
        for i in range(k, len(items)):
            if items[i][1] in seen or not duplicates:
                continue
            total_profit -= duplicates.pop()
            total_profit += items[i][0]
            seen.add(items[i][1])
            ans = max(ans, total_profit + len(seen) ** 2)
        return ans
