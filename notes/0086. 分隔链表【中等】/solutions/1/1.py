# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        small_dummy = ListNode(0)
        large_dummy = ListNode(0)
        small, large = small_dummy, large_dummy

        while head:
            if head.val < x: small.next = head; small = small.next
            else: large.next = head; large = large.next
            head = head.next
        large.next = None             # 断开大链表尾部
        small.next = large_dummy.next  # 拼接两段
        return small_dummy.next
