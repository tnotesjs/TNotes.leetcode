class Solution:
    def maxUniqueSplit(self, s: str) -> int:
        self.res = 0

        def backtrack(idx: int, used: set[str]) -> None:
            if idx == len(s):
                self.res = max(self.res, len(used))
                return
            for i in range(idx + 1, len(s) + 1):
                sub = s[idx:i]
                if sub not in used:
                    used.add(sub)
                    backtrack(i, used)
                    used.discard(sub)

        backtrack(0, set())
        return self.res
