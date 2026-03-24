# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head or not head.next or k == 0: return head

        # 计算链表长度，并找到尾节点
        length = 1
        tail = head
        while tail.next: tail = tail.next; length += 1

        k %= length
        if k == 0: return head

        tail.next = head  # 尾节点接头，形成环

        # 找到新的尾节点（从 head 走 length - k - 1 步）
        new_tail = head
        for _ in range(length - k - 1): new_tail = new_tail.next

        new_head = new_tail.next
        new_tail.next = None  # 断开环
        return new_head
