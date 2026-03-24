class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []
        def backtrack(start, remain, path):
            if len(path) == k:
                if remain == 0:
                    res.append(path[:])
                return
            for i in range(start, 10):
                if i > remain:
                    break
                path.append(i)
                backtrack(i + 1, remain - i, path)
                path.pop()
        backtrack(1, n, [])
        return res
