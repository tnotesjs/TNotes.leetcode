class Solution:
    def largestOverlap(self, img1: List[List[int]], img2: List[List[int]]) -> int:
        from collections import Counter
        n = len(img1)
        pts1 = [(i, j) for i in range(n) for j in range(n) if img1[i][j]]
        pts2 = [(i, j) for i in range(n) for j in range(n) if img2[i][j]]
        if not pts1 or not pts2: return 0
        cnt = Counter((r1-r2, c1-c2) for r1, c1 in pts1 for r2, c2 in pts2)
        return max(cnt.values())
