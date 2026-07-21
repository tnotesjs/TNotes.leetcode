# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        # 计算链表长度
        length = 0
        p = head
        while p:
            length += 1
            p = p.next

        dummy = ListNode(0, head)

        size = 1
        while size < length:
            prev = dummy
            cur = dummy.next

            while cur:
                # 切出两段
                l1 = cur
                l2 = self._split(l1, size)
                cur = self._split(l2, size)

                # 合并并连接
                prev = self._merge(l1, l2, prev)

            size *= 2

        return dummy.next

    def _split(self, head: Optional[ListNode], size: int) -> Optional[ListNode]:
        if not head:
            return None
        for _ in range(1, size):
            if not head.next:
                break
            head = head.next
        rest = head.next
        head.next = None
        return rest

    def _merge(
        self, l1: Optional[ListNode], l2: Optional[ListNode], prev: ListNode
    ) -> ListNode:
        while l1 and l2:
            if l1.val <= l2.val:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next
            prev = prev.next
        prev.next = l1 or l2
        while prev.next:
            prev = prev.next
        return prev
