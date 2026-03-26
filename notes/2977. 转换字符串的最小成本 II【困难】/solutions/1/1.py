class Solution:
    def minimumCost(self, source: str, target: str, original: list[str], changed: list[str], cost: list[int]) -> int:
        str_map = {}
        def get_id(s: str) -> int:
            if s not in str_map:
                str_map[s] = len(str_map)
            return str_map[s]
        for o, c in zip(original, changed):
            get_id(o)
            get_id(c)
        sz = len(str_map)
        INF = float('inf')
        dist = [[INF] * sz for _ in range(sz)]
        for i in range(sz):
            dist[i][i] = 0
        for o, c, w in zip(original, changed, cost):
            u, v = get_id(o), get_id(c)
            dist[u][v] = min(dist[u][v], w)
        for k in range(sz):
            for i in range(sz):
                for j in range(sz):
                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
        lengths = set(len(s) for s in original)
        n = len(source)
        dp = [INF] * (n + 1)
        dp[0] = 0
        for i in range(n):
            if dp[i] == INF:
                continue
            if source[i] == target[i]:
                dp[i + 1] = min(dp[i + 1], dp[i])
            for length in lengths:
                if i + length > n:
                    continue
                src_sub = source[i:i + length]
                tgt_sub = target[i:i + length]
                if src_sub in str_map and tgt_sub in str_map:
                    u, v = str_map[src_sub], str_map[tgt_sub]
                    if dist[u][v] < INF:
                        dp[i + length] = min(dp[i + length], dp[i] + dist[u][v])
        return dp[n] if dp[n] < INF else -1
