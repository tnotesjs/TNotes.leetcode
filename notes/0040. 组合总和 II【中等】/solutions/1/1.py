class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        ans = []

        def backtrack(start: int, remain: int, path: List[int]) -> None:
            if remain == 0:
                ans.append(path[:])
                return
            for i in range(start, len(candidates)):
                if candidates[i] > remain:
                    break  # 剪枝
                if i > start and candidates[i] == candidates[i - 1]:
                    continue  # 跳过同层重复元素
                path.append(candidates[i])
                backtrack(i + 1, remain - candidates[i], path)  # i+1：每个元素只用一次
                path.pop()

        backtrack(0, target, [])
        return ans
