class Solution:
    def maxDistance(self, arrays: List[List[int]]) -> int:
        min_val, max_val = arrays[0][0], arrays[0][-1]
        res = 0
        for i in range(1, len(arrays)):
            cur_min, cur_max = arrays[i][0], arrays[i][-1]
            res = max(res, abs(cur_max - min_val), abs(max_val - cur_min))
            min_val = min(min_val, cur_min)
            max_val = max(max_val, cur_max)
        return res
