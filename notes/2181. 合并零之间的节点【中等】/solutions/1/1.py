# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        tail = dummy
        cur = head.next
        s = 0
        while cur:
            if cur.val == 0:
                tail.next = ListNode(s)
                tail = tail.next
                s = 0
            else:
                s += cur.val
            cur = cur.next
        return dummy.next
