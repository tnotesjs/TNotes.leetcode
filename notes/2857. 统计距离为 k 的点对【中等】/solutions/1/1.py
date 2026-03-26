class Solution:
    def countPairs(self, coordinates: List[List[int]], k: int) -> int:
        cnt = defaultdict(int)
        ans = 0
        for x, y in coordinates:
            for a in range(k + 1):
                ans += cnt[(x ^ a, y ^ (k - a))]
            cnt[(x, y)] += 1
        return ans
