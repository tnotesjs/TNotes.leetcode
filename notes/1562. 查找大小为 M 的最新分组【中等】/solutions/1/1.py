class Solution:
    def findLatestStep(self, arr: list[int], m: int) -> int:
        n = len(arr)
        if m == n:
            return n
        length = [0] * (n + 2)
        res = -1
        for step, pos in enumerate(arr):
            left_len = length[pos - 1]
            right_len = length[pos + 1]
            new_len = left_len + right_len + 1
            length[pos - left_len] = new_len
            length[pos + right_len] = new_len
            if left_len == m or right_len == m:
                res = step
        return res
