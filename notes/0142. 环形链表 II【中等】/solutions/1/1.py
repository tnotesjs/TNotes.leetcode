# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return None

        slow = fast = head

        # 第一步：检测是否有环
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow is fast:
                break

        # 无环
        if not fast or not fast.next:
            return None

        # 第二步：找环的入口
        fast = head
        while slow is not fast:
            slow = slow.next
            fast = fast.next

        return slow
