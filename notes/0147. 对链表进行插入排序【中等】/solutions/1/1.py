# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        cur = head
        while cur:
            nxt = cur.next
            prev = dummy
            while prev.next and prev.next.val < cur.val:
                prev = prev.next
            cur.next = prev.next
            prev.next = cur
            cur = nxt
        return dummy.next
