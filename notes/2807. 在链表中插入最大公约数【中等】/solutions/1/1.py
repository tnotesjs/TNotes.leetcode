class Solution:
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        from math import gcd
        cur = head
        while cur and cur.next:
            g = gcd(cur.val, cur.next.val)
            node = ListNode(g, cur.next)
            cur.next = node
            cur = node.next
        return head
