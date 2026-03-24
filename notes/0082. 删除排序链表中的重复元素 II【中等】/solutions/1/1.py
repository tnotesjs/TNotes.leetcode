# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prev = dummy

        while prev.next:
            cur = prev.next
            # 跳过所有重复节点
            while cur.next and cur.val == cur.next.val: cur = cur.next
            if prev.next is cur:
                prev = prev.next  # 无重复，前进
            else:
                prev.next = cur.next  # 跳过所有重复节点
        return dummy.next
