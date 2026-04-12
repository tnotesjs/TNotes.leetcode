# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        fast = slow = dummy

        # fast 先走 n + 1 步
        for _ in range(n + 1):
            fast = fast.next

        # fast 和 slow 同步前进，直到 fast 到达末尾
        while fast:
            fast = fast.next
            slow = slow.next

        # slow.next 即为待删除节点
        slow.next = slow.next.next
        return dummy.next
