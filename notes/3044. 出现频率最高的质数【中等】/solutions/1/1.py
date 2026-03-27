class Solution:
    def mostFrequentPrime(self, mat: list[list[int]]) -> int:
        from collections import Counter
        m, n = len(mat), len(mat[0])
        dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
        def is_prime(n):
            if n < 2: return False
            for i in range(2, int(n**0.5) + 1):
                if n % i == 0: return False
            return True
        freq = Counter()
        for i in range(m):
            for j in range(n):
                for dr, dc in dirs:
                    r, c, num = i + dr, j + dc, mat[i][j]
                    while 0 <= r < m and 0 <= c < n:
                        num = num * 10 + mat[r][c]
                        if is_prime(num):
                            freq[num] += 1
                        r += dr
                        c += dc
        if not freq:
            return -1
        max_f = max(freq.values())
        return max(k for k, v in freq.items() if v == max_f)
