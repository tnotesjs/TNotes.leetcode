class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        parent = list(range(n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        count = n
        for i in range(n):
            for j in range(i + 1, n):
                if isConnected[i][j]:
                    ri, rj = find(i), find(j)
                    if ri != rj:
                        parent[ri] = rj
                        count -= 1
        return count
