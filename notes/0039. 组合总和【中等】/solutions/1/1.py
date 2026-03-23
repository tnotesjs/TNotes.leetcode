class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        ans = []

        def backtrack(start: int, remain: int, path: List[int]) -> None:
            if remain == 0:
                ans.append(path[:])
                return
            for i in range(start, len(candidates)):
                if candidates[i] > remain:
                    break  # 剪枝
                path.append(candidates[i])
                backtrack(i, remain - candidates[i], path)  # 可重复选取
                path.pop()

        backtrack(0, target, [])
        return ans
