class Solution:
    def colorTheArray(self, n: int, queries: list[list[int]]) -> list[int]:
        colors = [0] * n
        ans = []
        count = 0
        for idx, color in queries:
            old = colors[idx]
            if old != 0:
                if idx > 0 and colors[idx - 1] == old:
                    count -= 1
                if idx < n - 1 and colors[idx + 1] == old:
                    count -= 1
            colors[idx] = color
            if idx > 0 and colors[idx - 1] == color:
                count += 1
            if idx < n - 1 and colors[idx + 1] == color:
                count += 1
            ans.append(count)
        return ans
