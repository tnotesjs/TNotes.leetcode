# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def nodesBetweenCriticalPoints(self, head: 'Optional[ListNode]') -> list[int]:
        prev, cur, idx = head, head.next, 1
        first = last = -1
        min_dist = float('inf')
        while cur.next:
            if (cur.val > prev.val and cur.val > cur.next.val) or \
               (cur.val < prev.val and cur.val < cur.next.val):
                if first == -1:
                    first = idx
                if last != -1:
                    min_dist = min(min_dist, idx - last)
                last = idx
            prev = cur
            cur = cur.next
            idx += 1
        if first == last or first == -1:
            return [-1, -1]
        return [min_dist, last - first]
