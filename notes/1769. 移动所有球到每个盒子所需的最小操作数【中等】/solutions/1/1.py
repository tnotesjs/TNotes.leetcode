class Solution:
    def minOperations(self, boxes: str) -> list[int]:
        n = len(boxes)
        ans = [0] * n
        count = ops = 0
        for i in range(n):
            ans[i] += ops
            count += int(boxes[i])
            ops += count
        count = ops = 0
        for i in range(n - 1, -1, -1):
            ans[i] += ops
            count += int(boxes[i])
            ops += count
        return ans
