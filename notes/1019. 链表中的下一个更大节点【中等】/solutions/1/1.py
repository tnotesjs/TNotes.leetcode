class Solution:
    def nextLargerNodes(self, head: 'ListNode | None') -> list[int]:
        vals = []
        cur = head
        while cur:
            vals.append(cur.val)
            cur = cur.next
        n = len(vals)
        res = [0] * n
        stack = []
        for i in range(n):
            while stack and vals[stack[-1]] < vals[i]:
                res[stack.pop()] = vals[i]
            stack.append(i)
        return res
