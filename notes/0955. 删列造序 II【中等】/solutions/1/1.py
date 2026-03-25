class Solution:
    def minDeletionSize(self, strs: list[str]) -> int:
        n, m = len(strs), len(strs[0])
        deletions = 0
        sorted_pairs = [False] * (n - 1)

        for j in range(m):
            can_keep = True
            for i in range(n - 1):
                if not sorted_pairs[i] and strs[i][j] > strs[i + 1][j]:
                    can_keep = False
                    break
            if not can_keep:
                deletions += 1
            else:
                for i in range(n - 1):
                    if strs[i][j] < strs[i + 1][j]:
                        sorted_pairs[i] = True

        return deletions
