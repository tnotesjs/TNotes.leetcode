# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseEvenLengthGroups(self, head: 'Optional[ListNode]') -> 'Optional[ListNode]':
        vals = []
        cur = head
        while cur:
            vals.append(cur.val)
            cur = cur.next
        idx, group = 0, 1
        while idx < len(vals):
            length = min(group, len(vals) - idx)
            if length % 2 == 0:
                vals[idx:idx + length] = vals[idx:idx + length][::-1]
            idx += length
            group += 1
        cur = head
        for v in vals:
            cur.val = v
            cur = cur.next
        return head
