class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.val >= 5:
            head = ListNode(0, head)
        cur = head
        while cur:
            cur.val = (cur.val * 2 + (1 if cur.next and cur.next.val >= 5 else 0)) % 10
            cur = cur.next
        return head
