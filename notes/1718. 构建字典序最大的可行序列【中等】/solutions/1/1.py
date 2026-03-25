class Solution:
    def constructDistancedSequence(self, n: int) -> list[int]:
        length = 2 * n - 1
        res = [0] * length
        used = [False] * (n + 1)

        def backtrack(idx):
            if idx == length:
                return True
            if res[idx] != 0:
                return backtrack(idx + 1)
            for num in range(n, 0, -1):
                if used[num]:
                    continue
                if num == 1:
                    res[idx] = 1
                    used[1] = True
                    if backtrack(idx + 1):
                        return True
                    res[idx] = 0
                    used[1] = False
                else:
                    if idx + num < length and res[idx + num] == 0:
                        res[idx] = num
                        res[idx + num] = num
                        used[num] = True
                        if backtrack(idx + 1):
                            return True
                        res[idx] = 0
                        res[idx + num] = 0
                        used[num] = False
            return False

        backtrack(0)
        return res
