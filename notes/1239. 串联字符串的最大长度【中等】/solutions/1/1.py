class Solution:
    def maxLength(self, arr: list[str]) -> int:
        masks = []
        for s in arr:
            mask = 0
            valid = True
            for c in s:
                bit = 1 << (ord(c) - ord('a'))
                if mask & bit:
                    valid = False
                    break
                mask |= bit
            if valid:
                masks.append(mask)

        self.ans = 0

        def dfs(idx: int, cur: int):
            self.ans = max(self.ans, bin(cur).count('1'))
            for i in range(idx, len(masks)):
                if cur & masks[i] == 0:
                    dfs(i + 1, cur | masks[i])

        dfs(0, 0)
        return self.ans
