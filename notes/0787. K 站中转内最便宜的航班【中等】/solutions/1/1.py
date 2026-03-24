class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        dp = [float('inf')] * n
        dp[src] = 0
        for _ in range(k + 1):
            tmp = dp[:]
            for u, v, w in flights:
                if dp[u] != float('inf'):
                    tmp[v] = min(tmp[v], dp[u] + w)
            dp = tmp
        return -1 if dp[dst] == float('inf') else dp[dst]
