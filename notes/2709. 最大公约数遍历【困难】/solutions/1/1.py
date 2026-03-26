class Solution:
    def canTraverseAllPairs(self, nums: list[int]) -> bool:
        n = len(nums)
        if n == 1:
            return True
        parent = list(range(n + 100001))
        rank = [0] * (n + 100001)

        def find(x: int) -> int:
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        def union(x: int, y: int) -> None:
            px, py = find(x), find(y)
            if px == py:
                return
            if rank[px] < rank[py]:
                parent[px] = py
            elif rank[px] > rank[py]:
                parent[py] = px
            else:
                parent[py] = px
                rank[px] += 1

        for i in range(n):
            if nums[i] == 1:
                return False
            x = nums[i]
            p = 2
            while p * p <= x:
                if x % p == 0:
                    union(i, n + p)
                    while x % p == 0:
                        x //= p
                p += 1
            if x > 1:
                union(i, n + x)

        root = find(0)
        return all(find(i) == root for i in range(1, n))
