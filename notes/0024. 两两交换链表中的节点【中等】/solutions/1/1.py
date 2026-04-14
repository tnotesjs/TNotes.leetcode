# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        cur = dummy

        while cur.next and cur.next.next:
            first = cur.next  # 第一个节点
            second = cur.next.next  # 第二个节点
            first.next = second.next  # first 指向第二个节点后续
            second.next = first  # second 指向 first
            cur.next = second  # 前驱节点指向 second
            cur = first  # 移动到下一对的前驱

        return dummy.next
