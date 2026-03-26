# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def spiralMatrix(self, m: int, n: int, head: Optional[ListNode]) -> list[list[int]]:
        matrix = [[-1] * n for _ in range(m)]
        dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        r, c, d = 0, 0, 0
        node = head
        while node:
            matrix[r][c] = node.val
            node = node.next
            nr, nc = r + dirs[d][0], c + dirs[d][1]
            if nr < 0 or nr >= m or nc < 0 or nc >= n or matrix[nr][nc] != -1:
                d = (d + 1) % 4
            r += dirs[d][0]
            c += dirs[d][1]
        return matrix
