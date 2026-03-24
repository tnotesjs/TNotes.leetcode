# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head or not head.next:
            return
        # 找中点
        slow, fast = head, head
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        # 反转后半部分
        prev, cur = None, slow.next
        slow.next = None
        while cur:
            nxt = cur.next
            cur.next = prev
            prev = cur
            cur = nxt
        # 合并两个链表
        l1, l2 = head, prev
        while l2:
            next1, next2 = l1.next, l2.next
            l1.next = l2
            l2.next = next1
            l1 = next1
            l2 = next2
